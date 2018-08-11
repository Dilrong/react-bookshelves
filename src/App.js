import React, { Component } from 'react';
import {Header, BookCard} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <BookCard/>
      </div>
    );
  }
}

export default App;
