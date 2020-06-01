import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Main } from './pages/Main/Main'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Main/>
    </div>
  );
}

export default App;
