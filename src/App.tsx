import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
                {({ state }: BookContainer) => <List items={state.byId} />}
              </Subscribe>
            </Route>
            <Route path="/book/:id" component={SingleBook} />
            <Route exact path="/add">
              <AddBook />
            </Route>
          </Switch>
        </Pane>
        <Navigation>
          <Navigation.Icon to="/" icon="menu">
            Shelf
          </Navigation.Icon>
          <Navigation.Icon to="/add" icon="search">
            Search
          </Navigation.Icon>
        </Navigation>
      </AppContainer>
    </Router>
  </Provider>
);

export default App;
