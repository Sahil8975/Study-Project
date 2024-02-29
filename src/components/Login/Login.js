import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './Login.css';
import SignIn from '../../assests/images/SignIn.png';
import { APIS, API_V1 } from "../../Utils/apiList";
import Loader from "../Loader/Loader";

// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .required("Email is required")
//     .email("Invalid email format"),
//   password: Yup.string()
//     .required("Password is required")
//     .min(6, "Password must be at least 6 characters long"),
// });


function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    if (localStorage.getItem("auth")) navigate("/");
  }, [navigate]);

  const initialValues = {
    email: "",
    password: ""
  };


  const getLogin = async (username, password) => {
    const url = `${API_V1}/${APIS.LOGIN_URL}`;
    const requestBody = {
      username,
      password
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error('Login request failed');
      }

      const result = await response.json();

      if (result && result.token) {
        // return result;
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const onSubmit = async (values) => {
    if (values.email !== "Sahil" || values.password !== "Mujawar") {
      return setErrorMessage("Invalid email or password");
    }
    try {
      setLoading(true);
      const response = await getLogin(values.email, values.password);
      localStorage.setItem("email", values.email);
      localStorage.setItem("password", values.password);
      localStorage.setItem("auth", "true");
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error("Error occurred during login:", error);
      setLoading(false);
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };
 
  return (
    <div className="LoginBorder">
      <Loader open={loading} />
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              // validationSchema={validationSchema}
            >
              <Form className="login100-form validate-form">
                <img src={SignIn} alt="zohoLogo" style={{ height: '3rem', marginLeft:'33rem' }} />
                <span className="login100-form-title">Sign in</span>
                {errorMessage.length > 0 && (
                <div style={{ marginBottom: "10px", color: "red" }}>
                  {errorMessage}
                </div>
              )}
              {successMessage.length > 0 && (
                <div style={{ marginBottom: "10px", color: "green" }}>
                  {successMessage}
                </div>
              )}
                <Field
                  type="text"
                  name="email"
                  placeholder="Type your username"
                  className="input100"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ marginBottom: "10px", color: "red" }}
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Type your password"
                  className="input100"
                />
                <div className="text-right p-t-8 p-b-31" style={{textAlign:'center'}}>
                  <a href="#">Forgot password?</a>
                </div>
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button type="submit" className="login100-form-btn">
                      Login
                    </button>
                  </div>
                </div>
                <div className="txt1 text-center p-t-54 p-b-20">
                  <span>Or Sign Up Using</span>
                </div>
                <div className="flex-c-m">
                  <a href="#" className="login100-social-item bg1">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="login100-social-item bg2">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#" className="login100-social-item bg3">
                    <i className="fa fa-google" />
                  </a>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
