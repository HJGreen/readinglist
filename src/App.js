import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import styled from 'styled-components';
import List from './components/List';

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100vw;
  height: 100vh;
`
const Pane = styled.section`
  flex: 1 0 auto;
`

const books = [
  {author: "Kurt Vonnegut", title: "Slaughterhouse 5"}
]

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Pane>
          <List items={books}/>
        </Pane>
        <NavigationBar />
      </AppContainer>
    );
  }
}

export default App;
