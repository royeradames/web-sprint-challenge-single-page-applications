import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Switch, Route, useHistory } from 'react-router-dom'
import * as yup from 'yup'

//import components
import Confirmation from './components/Confirmation'
import Form from './components/Form'
import Home from './components/Home'
import Header from './components/Header'
import formSchema from './validation/formSchema'

//inital 1 renden values
const initialFormValues = {
  ///// TEXT INPUTS /////
  first_name: '',
  last_name: '',
  sizes: '',
  toppings: {
    pepperoni: false,
    hawaiian: false,
    Meatlovers: false,
    SausageKale: false
  },
  instructions: '',

}
const initialFormErrors = {
  first_name: '',
  last_name: '',
  sizes: '',
  toppings: {
    pepperoni: false,
    hawaiian: false,
    meatlovers: false,
    sausageKale: false
  },
}
const initialUsers = []
const initialDisabled = true

const App = () => {
  //states
  const [orderInSystem, setOrderInSystem] = useState(initialUsers)// array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  const history = useHistory()


  //helper functions
  const inputChange = (name, value) => {
    yup
      //match name key on the formSchema
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(() => {
        setFormErrors({
          ...formErrors, [name]: ""
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message returned from yup (that we created in our schema) */
      .catch( err => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]:value //not an array. [ ] are acting like `${ }`
    })
  }
  const checkboxChange = (name, isChecked) => {
    //add checkbox input on formValues state
    setFormValues({
      ...formValues,
      [name]:isChecked
    })
  }
  const submit = () => {
    //prepare new user data how the system accepts it
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      role: formValues.role,
      termsOfService: formValues.termsOfService,
    }
  }
  return (
    <>
      <Header />

      <Switch>
        <Route path='/pizza'>
          <Form
            values={formValues}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            submit={submit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
