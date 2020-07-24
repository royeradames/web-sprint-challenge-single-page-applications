import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Switch, Route, useHistory} from 'react-router-dom'

//import components
import Confirmation from './components/Confirmation'
import Form from './components/Form'

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
