import * as yup from 'yup'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  first_name: yup
    .string()
    .min(3, "First Name must be at least 3 characters")
    .required("First name is Required"),
  last_name: yup
    .string()
    .min(3, "Last Name must be at least 3 characters")
    .required("Last name is Required"),
  password: yup
    .string()
    .min(3, "Password must be at least 3 characters")
    .required("Password is required"),
  role: yup
    .string(),
  termsOfService: yup
    .boolean()
    .oneOf([true], 'You have to accept Terms of Service to continue.')
    .required("Terms Of Service is required"),

})

export default formSchema
