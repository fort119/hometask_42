import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import './App.css';

const regPhone = /^(\d{0,4})?(\(?\d{3}\)?)(\(?\d{3}\)?)?(\(?\d{4}\)?)$/;

const validationScheme = Yup.object().shape({
  userName: Yup.string()
  .required("Required"),

  email: Yup.string()
  .required("Required")
  .email("Invalid email"),

  phoneNumber: Yup.string()
  .matches(regPhone, 'invalid phone number')
  .min(12, "phone number must contain 12 characters")
  .max(12, "phone number must contain 12 characters").matches(regPhone, "it's not a phone number").required("Required"),
});

function App() {
  return (
    <div className="App">
      <h1 className='form-name'>Log in!</h1>
      <Formik
        validationSchema={validationScheme}
        initialValues={{
          userName: "",
          email: "",
          phoneNumber: "",
        }}
        onSubmit={values =>{
          const alertText = `your user name is: ${values.userName}\nyour email is: ${values.email}\nyour phone number is: ${values.phoneNumber}`;
          alert(alertText);
        }}
        >
        
        {({ errors, touched }) => (

         <Form className = "form">

           <Field name="userName" placeholder = "User name" />
           {errors.userName && touched.userName ? (
             <div>{errors.userName}</div>
           ) : null}

           <Field name="email" type="email" placeholder = "Email" />
           {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}

           <Field name="phoneNumber" placeholder = "Phone number"/>
           {errors.phoneNumber && touched.phoneNumber ? (
             <div>{errors.phoneNumber}</div>
           ) : null}

           <button type="submit-btn" className='submit-btn'>Submit</button>

         </Form>
       )}

      </Formik>
    </div>
  );
}

export default App;