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
  size: '',
  pepperoni: false,
  hawaiian: false,
  meatlovers: false,
  sausageKale: false,
  instructions: '',

}
const initialFormErrors = {
  first_name: '',
  last_name: '',
  size: '',
  pepperoni: false,
  hawaiian: false,
  meatlovers: false,
  sausageKale: false,
}
const initialOrders = []
const initialDisabled = true

const App = () => {
  //states
  const [orderInSystem, setOrderInSystem] = useState(initialOrders)// array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  //helper functions
  const postNewOrder = newFriend => {
    axios.post('https://reqres.in/api/users', newFriend)
      .then(res => {
         
        setOrderInSystem([res.data, ...orderInSystem])
        setFormValues(initialFormValues)
      })
      .catch(err => {
         
      })
  }
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
      .catch(err => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value //not an array. [ ] are acting like `${ }`
    })
  }
  const checkboxChange = (name, isChecked) => {
    //add checkbox input on formValues state
     
    console.log(formValues)
    setFormValues({
      ...formValues,
      [name]: isChecked
    })
    console.log(formValues)
  }
  const submit = () => {
    //prepare new user data how the system accepts it
    const newOrder = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      size: formValues.email,
      pepperoni: formValues.pepperoni,
      hawaiian: formValues.pepperoni,
      meatlovers: formValues.pepperoni,
      sausageKale: formValues.pepperoni,
      instructions: formValues.instructions.trim(),
    }
    postNewOrder(newOrder)
  }

  //if the form is valid let them submit
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])
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
