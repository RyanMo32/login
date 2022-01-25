import React from "react";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: '',
    },
    onSubmit: (values) => {
      alert ("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.emailField) errors.emailField = "Field Required";
      if (!values.pswField) errors.pswField = "Field Required";
      if (values.emailField) {
        let mustEmail = values.emailField.includes('@') && values.emailField.includes('.');
        if (!mustEmail) errors.emailField = "username should be an email";
      };
      return errors
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input
//          id = "emailField"
          type = "text"
          name = "emailField"
          onChange = {formik.handleChange}
          value = {formik.values.emailField}
        />
        {formik.errors.emailField} ? (
          <div style = {{ color: "red" }}>
        {formik.errors.emailField} 
        </div> 
        ) : null
        <div>Password</div>
        <input
//        id = "pswField"
        type = "text"
        name = "pswField"
        onChange = {formik.handleChange}
        value = {formik.values.pswField}
        />
        {formik.errors.pswField} ? (
          <div style = {{ color: "red" }}>
        {formik.errors.pswField}
        </div> 
        ) : null 
        <button id = "submitBtn" type = "submit">Submit</button>
        </form>
    </div>
  );
}

export default App;
