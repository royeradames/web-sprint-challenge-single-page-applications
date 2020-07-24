import * as yup from 'yup'

const formSchema = yup.object().shape({
  sizes: yup
    .string()
    .required("Pick a size"),
  first_name: yup
    .string()
    .min(3, "First Name must be at least 3 characters")
    .required("First name is Required"),
  last_name: yup
    .string()
    .min(3, "Last Name must be at least 3 characters")
    .required("Last name is Required"),
  toppings: yup
    .boolean()
    .required("Select a topping"),
  instructions: yup
    .string(),
})

export default formSchema
