import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import styled from 'styled-components';
import List from './components/List';

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100vw;
  height: 100vh;
`
const Pane = styled.section`
  flex: 0 1 auto;
  overflow-y: auto;
`

const books = [
  { author: "Kurt Vonnegut", title: "Slaughterhouse 5" },
  { author: "James Gleick", title: "Chaos" },
  { author: "Daniel Higginbotham", title: "Clojure for the Brave and True" },
  { author: "Brandon Sanderson", title: "The Final Empire" },
]

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Pane>
          <List items={books} />
        </Pane>
        <NavigationBar />
      </AppContainer>
    );
  }
}

export default App;
