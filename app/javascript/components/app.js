import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './greeting'

function App() {
  return (
    <div>
      <h1>Hello rails-react</h1>
      <Routes>
        <Route path='/' element={ <Greeting />} />
      </Routes>
    </div>
  );
}

export default App;