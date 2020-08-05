import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'

import { Header, NeatherMap } from './components'

function App() {
  return (
    <div>
      <Header />
      <Route component={NeatherMap} path='/neather' exact />
    </div>
  );
}

export default App;
