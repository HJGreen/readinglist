import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Provider, connect } from "unistore/react";

import NavigationBar from "./components/NavigationBar";
import List from "./components/List";
import AddForm from "./components/AddForm";

import store from "./store";

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

const addNewBook = store.action("addBook");
const removeBook = store.action("removeBook");

const App = connect("books")(({ books }) => (
  <Router>
    <AppContainer>
      <Pane>
        <Switch>
          <Route exact path="/">
            <List
              items={Object.entries(books.byId || {})}
              removeListItem={removeBook}
            />
          </Route>
          <Route exact path="/add">
            <AddForm addNewBook={addNewBook} />
          </Route>
        </Switch>
      </Pane>
      <NavigationBar />
    </AppContainer>
  </Router>
));

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
