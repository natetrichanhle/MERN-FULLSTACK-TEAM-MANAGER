import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import Create from './views/Create';
import Status from './views/Status';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/player/list">
          <Main />
        </Route>
        <Route exact path='/player/new'>
          <Create />
        </Route>
        <Route exact path="/player/:id">
          <Detail />
        </Route>
        <Route exact path="/player/edit/:id">
          <Update />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;