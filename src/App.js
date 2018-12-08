import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import NavigationBar from "./components/NavigationBar";
import List from "./components/List";
import AddForm from "./components/AddForm";

import books from "./data/books";

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: {}
    };
  }

  componentDidMount() {
    localStorage.setItem("books", JSON.stringify(books));

    const localBooks = localStorage.getItem("books");

    if (localBooks) {
      this.setState({ books: JSON.parse(localBooks) });
    }
  }

  render() {
    const { books } = this.state;

    return (
      <Router>
        <AppContainer>
          <Pane>
            <Switch>
              <Route exact path="/">
                <List items={books.finished} />
              </Route>
              <Route exact path="/add">
                <AddForm addNewBook={this.addNewBook} />
              </Route>
            </Switch>
          </Pane>
          <NavigationBar />
        </AppContainer>
      </Router>
    );
  }

  addNewBook = ({ title, author, date_started, date_finished }) => {
    const existingBooks = this.state.books.finished || {};

    this.setState({
      books: {
        finished: [
          ...existingBooks,
          {
            title: title,
            author: author,
            date_started: date_started,
            date_finished: date_finished
          }
        ]
      }
    });
  };
}

export default App;
