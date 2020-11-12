import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import '../Main/Main';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route>
        <SavedNews path="/saved-news"/>
      </Route>
    </Switch>
  );
}

export default App;
