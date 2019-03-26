import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider, Subscribe } from "unstated";
import BookContainer from "./containers/BookContainer";
import Navigation from "./components/Navigation";
import List from "./components/List";
import AddBook from "./components/AddBook";
import AppContainer from "./components/AppContainer";
import Pane from "./components/Pane";
import SingleBook from "./components/SingleBook";
import Statistics from "./components/Statistics";

const App: React.FunctionComponent = () => (
  <Provider>
    <Router>
      <AppContainer>
        <Pane>
          <Switch>
            <Route exact path="/">
              <Redirect to="/books" />
            </Route>
            <Route exact path="/books">
              <Subscribe to={[BookContainer]}>
                {({ state }: BookContainer) => <List items={state.byId} />}
              </Subscribe>
            </Route>
            <Route path="/books/:id" component={SingleBook} />
            <Route exact path="/add">
              <AddBook />
            </Route>
            <Route exact path="/stats" component={Statistics} />
          </Switch>
        </Pane>
        <Navigation>
          <Navigation.Icon to="/books" icon="shelf">
            Shelf
          </Navigation.Icon>
          <Navigation.Icon to="/add" icon="plus">
            Add
          </Navigation.Icon>
          <Navigation.Icon to="/stats" icon="stats">
            Stats
          </Navigation.Icon>
        </Navigation>
      </AppContainer>
    </Router>
  </Provider>
);

export default App;
