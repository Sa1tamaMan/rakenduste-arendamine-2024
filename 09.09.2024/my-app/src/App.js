import React from 'react';
import './App.css';
import Name from "./components/Name";
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Name title="Kris" />
      <Name />
      <Counter />
    </>
  )

  /* {
    "semi": false,
    "tabWidth": 2,
    "printWidth": 80,
    "singleQuote": false,
    "jsxSingleQuote": false,
    "bracketSpacing": true,
    "bracketSameLine": false,
    "trailingComma": "all",
    "arrowParens": "avoid",
    "singleAttributePerLine": true
  } */
}

export default App;
