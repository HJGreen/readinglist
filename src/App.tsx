import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Provider, Subscribe, Container } from "unstated";
import uuidv1 from "uuid";

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

interface IBook {
  id?: string;
  title: string;
  author: string;
}

interface IBookState {
  byId: {
    [id: string]: IBook;
  };
  allIds: string[];
}
const deleteProperty = ({ [key]: _, ...newObj }, key: string) => newObj;

class BookContainer extends Container<IBookState> {
  state = {
    byId: {
      abc: {
        id: "abc",
        author: "Brandon Sanderson",
        title: "The Final Empire"
      }
    },
    allIds: ["abc"]
  };

  addBook = (book: IBook) => {
    const id = book.id || uuidv1();

    this.setState(state => ({
      allIds: [...state.allIds, id],
      byId: Object.assign(state.byId, { [id]: { id: id, ...book } })
    }));
  };

  removeBook = (bookId: string) => {
    this.setState(state => ({
      allIds: state.allIds.filter(id => bookId !== id),
      byId: deleteProperty(state.byId, bookId)
    }));
  };
}

const App = () => (
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
              {({ addBook }: BookContainer) => <AddForm addNewBook={addBook} />}
            </Subscribe>
          </Route>
        </Switch>
      </Pane>
      <NavigationBar />
    </AppContainer>
  </Router>
);

export default () => (
  <Provider>
    <App />
  </Provider>
);
