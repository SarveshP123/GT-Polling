import React, { useEffect, useState } from "react";

import { auth, provider } from "./Firebase";

import { signInWithPopup } from "firebase/auth";

import "./Twitsignin1.css";

import { Row, Col, Card, Button, Form } from "react-bootstrap";

import { RiTwitterXLine } from "react-icons/ri";

import { FcGoogle } from "react-icons/fc";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";

function Twitsignin1() {
  let [value, setValue] = useState(null);

  let navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);

      sessionStorage.setItem("email", data.user.email);
      sessionStorage.setItem("displayName", data.user.displayName);
      // navigate('/Pollingpage')
    });
  };
  const [state, setState] = useState({
    mobilenumber: "",
    password: "",
  });
  const schema = yup.object().shape({
    mobilenumber: yup
      .string()
      .matches(/^\d+$/, "Mobile number must contain only digits")
      .min(10, "Mobile number must be  10 digits")
      .max(10, "Mobile number must be  10 digits")
      .required("Mobile number is required"),
    password: yup
      .string()
      .matches(/^\d+$/, "Mobile number must contain only digits")
      .min(6, "Password must be 6 Digit")
      .max(6, "Password must be 6 Digit")
      .required("password is required"),
  });
  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    navigate("/Homepage");
  };

  return (
    <div className="twit-signin-container">
      {value ? (
        navigate("/Otpfirebase2")
      ) : (
        <Row className="align-items-center twit-signin-content">
          <Col
            md={6}
            className="d-flex justify-content-center twit-logo-container"
          >
            <RiTwitterXLine className="twit-logo" />
          </Col>

          <Col md={6} className="twit-signin-form-container">
            <Card className="twit-signin-card">
              <Card.Body>
                <h3 className="twit-signin-title">Sign in to X</h3>

                <div className="twit-signin-buttons">
                  <Button
                    variant="light"
                    className="twit-google-btn"
                    onClick={handleClick}
                  >
                    <span className="twit-google-btn-text">
                      <FcGoogle /> Sign in with Google
                    </span>
                  </Button>

                  <br />
                  <br />
                  <Formik
                    initialValues={state}
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                  >
                    {({ handleSubmit, handleChange }) => (
                      <Form onSubmit={handleSubmit}>
                        <Form.Group>
                          <Form.Control
                            name="mobilenumber"
                            type="number"
                            placeholder="Enter Phone Number"
                            className="phn"
                            value={state.mobilenumber}
                            onChange={(e) => {
                              handleChange(e);
                              handleInputChange(e);
                            }}
                          />
                          <ErrorMessage
                            name="mobilenumber"
                            component="div"
                            className="text-danger"
                          />
                        </Form.Group>

                        <br />

                        <Form.Group>
                          <Form.Control
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="pass"
                            value={state.password}
                            onChange={(e) => {
                              handleChange(e);
                              handleInputChange(e);
                            }}
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />{" "}
                          <br />
                        </Form.Group>
                        <Button
                          variant="light"
                          className="twit-signin-btn"
                          type="submit"
                        >
                          Sign in
                        </Button>
                      </Form>
                    )}
                  </Formik>

                  <Button
                    variant="light"
                    className="twit-forgot-btn"
                    onClick={() => navigate("/Otpfirebase1")}
                  >
                    Forgot password?
                  </Button>

                  <p className="twit-signup-text">
                    Don't have an account?{" "}
                    <Link to="/Signup" className="twit-signup-link">
                      Sign up
                    </Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Twitsignin1;
