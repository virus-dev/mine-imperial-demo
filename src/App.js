import React from 'react';
import { Route } from 'react-router-dom'

import { Header, NeatherMap, Settings, Moderation, MapModeration, MainPage } from './components'

function App() {
  return (
    <div>
      <Header />
      <Route component={MainPage} path='/' exact />
      <Route component={NeatherMap} path='/neather' exact />
      <Route component={Settings} path='/settings' exact />
      <Route component={Moderation} path='/moderation' exact />
      <Route component={MapModeration} path='/map-moderation' exact />
    </div>
  );
}

export default App;
