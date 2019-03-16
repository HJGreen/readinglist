import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider, Subscribe } from "unstated";
import BookContainer from "./containers/BookContainer";
import Navigation from "./components/Navigation";
import List from "./components/List";
import AddBook from "./components/AddBook";
import AppContainer from "./components/AppContainer";
import Pane from "./components/Pane";
import SingleBook from "./components/SingleBook";

const App: React.FunctionComponent = () => (
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
            <Route path="/book/:id" component={SingleBook}/>
            <Route exact path="/add">
              <AddBook />
            </Route>
          </Switch>
        </Pane>
        <Navigation>
          <Navigation.Item to="/">Shelf</Navigation.Item>
          <Navigation.Button to="/add">Search</Navigation.Button>
        </Navigation>
      </AppContainer>
    </Router>
  </Provider>
);

export default App;
