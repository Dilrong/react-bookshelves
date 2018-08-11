import React, { Component } from 'react';
import {Header} from './components'
import {BookContainer} from './containers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <BookContainer/>
      </div>
    );
  }
}

export default App;
