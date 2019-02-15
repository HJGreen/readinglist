import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Provider, Subscribe } from "unstated";
import BookContainer from "./containers/BookContainer";
import NavigationBar from "./components/NavigationBar";
import List from "./components/List";
import AddForm from "./components/AddForm";

const AppContainer = styled.main`
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`;

const Pane = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  overflow-y: auto;
`;

const App: React.FC = () => (
  <Provider>
    <Router>
      <AppContainer>
        <Pane>
          <Switch>
            <Route exact path="/">
              <Subscribe to={[BookContainer]}>
                {({ state, removeBook }: BookContainer) => (
                  <List items={state.byId} removeListItem={removeBook} />
                )}
              </Subscribe>
            </Route>
            <Route exact path="/add">
              <Subscribe to={[BookContainer]}>
                {({ addBook }: BookContainer) => (
                  <AddForm addNewBook={addBook} />
                )}
              </Subscribe>
            </Route>
          </Switch>
        </Pane>
        <NavigationBar />
      </AppContainer>
    </Router>
  </Provider>
);

export default App;
