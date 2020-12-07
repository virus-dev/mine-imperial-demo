import React from 'react';
import { Route, Link } from 'react-router-dom'

import { NeatherMap } from './components'

function App() {
  return (
    
    <div>
      <Route path='/' exact>
        <Link to="neather" style={{display: "block", margin: "20px"}}>Карта хайперлупов (Работает только на компьютере)</Link>
      </Route>
      <Route component={NeatherMap} path='/neather' exact />
      <a style={{display: "block", margin: "20px"}} href="https://docs.google.com/spreadsheets/d/1H6pn4vk-HvZuHFTm8-ZwM9rafYJXuNHkOfJl7_M6_R8/edit#gid=0">Таблица банка райска</a>
    </div>
  );
}

export default App;
