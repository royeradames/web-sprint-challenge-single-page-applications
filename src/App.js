import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Switch, Route, useHistory} from 'react-router-dom'

//import components
import Confirmation from './components/Confirmation'
import Form from './components/Form'
import Home from './components/Home'
import Header from './components/Header'


const App = () => {
  const history = useHistory()
  
  return (
    <>
      <Header/>

      <Switch>
        <Route>
          <Form />
        </Route>
        <Route>
          <Form />
        </Route>
      </Switch>
    </>
  );
};
export default App;
