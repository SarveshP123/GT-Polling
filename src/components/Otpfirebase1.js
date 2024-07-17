import React, { useState, useEffect } from "react";
import {RecaptchaVerifier,signInWithPhoneNumber,getAuth} from "firebase/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Button, Alert, Card, Col, Row, CardBody } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./Otpfirebase1.css";
const Otpfirebase1 = () => {
  const phoneSchema = yup.object().shape({
    mobile: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });

  const otpSchema = yup.object().shape({
    otp: yup
      .string()
      .matches(/^\d{6}$/, "OTP must be 6 digits")
      .required("OTP is required"),
  });
  const configureCaptcha = () => {
    const auth = getAuth();
    console.log("configurecaptcha");
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          console.log("Recaptcha verified");
        },
        "expired-callback": () => {
          console.log("Recaptcha expired, please try again");
        },
        defaultCountry:"IN",
      },
      auth
    );
    window.recaptchaVerifier.render().catch((error) => {
      console.error("Recaptcha render error", error);
    });
  };
  const onSignInSubmit = (values) => {
    configureCaptcha();
    const phoneNumber = `+91${values.mobile}`;
    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("OTP sent");
      })
      .catch((error) => {
        console.error("OTP not sent", error);
      });
  };
  let navigate = useNavigate();
  const onSubmitOtp = (values) => {
    const code = values.otp;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("OTP Verified");
        navigate("/Password");
      })
      .catch((error) => {
        console.log("OTP not verified");
      });
  };
  return (
    <div style={{ backgroundColor: "black", height: "200vh" }}>
      <Row>
        <Col md={4}></Col>
        <Col className="col100" md={4}>
          <Card className="card100">
            <CardBody>
              <h1 className="otpverf">OTP Verification</h1>
              <Formik
                initialValues={{ mobile: "" }}
                validationSchema={phoneSchema}
                onSubmit={onSignInSubmit}
              >
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="mobile" className="mobile">
                        Enter Mobile Number
                      </label>
                      <Field
                        name="mobile"
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="mobile"
                        component={Alert}
                        variant="danger"
                      />
                    </div>
                    <Button
                      type="submit"
                      id="sign-in-button"
                      className="form55"
                    >
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
              <Formik
                initialValues={{ otp: "" }}
                validationSchema={otpSchema}
                onSubmit={onSubmitOtp}
              >
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="otp" className="mobile2">
                        Enter OTP
                      </label>
                      <Field name="otp" type="text" className="form-control" />
                      <ErrorMessage
                        name="otp"
                        component={Alert}
                        variant="danger"
                      />
                    </div>
                    <Button type="submit" className="form55">
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
};

export default Otpfirebase1;
