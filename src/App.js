import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import styled from "styled-components";
import List from "./components/List";
import books from "./data/books";

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100vw;
  height: 100vh;
`;

const Pane = styled.section`
  flex: 1 0 auto;
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
    console.log(books);

    return (
      <Router>
        <AppContainer>
          <Pane>
            <Switch>
              <Route exact path="/">
                <List items={books.finished} />
              </Route>
              <Route exact path="/add" />
            </Switch>
          </Pane>
          <NavigationBar addNewBook={this.addNewBook} />
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
