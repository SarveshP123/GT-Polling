import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Card, Form, CloseButton } from 'react-bootstrap';
import { FaXTwitter } from "react-icons/fa6";
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [result, setResult] = useState();
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required")
      .matches(/^\d{6}$/, 'Password must be exactly 6 digits and contain only numbers')
  });
  

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (values) => {
    setResult(values);
  };

  return (
    <div>
      <Row>
        <Col>
          <Card className='aa'>
            <Card.Body>
              <Formik
                initialValues={state}
                validationSchema={schema}
                onSubmit={handleSubmit}
                enableReinitialize>
                {({ handleSubmit, handleChange, values }) => (
                  <form onSubmit={handleSubmit} noValidate>
                    <CloseButton className='dd' />
                    <p className='d2'><FaXTwitter className='ee' /></p>
                    <h1 className='bb'>Create your account</h1>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={values.username}
                      onChange={(e)=>{handleChange(e);handleInputChange(e)}}
                      className='cc'
                    />
                    <ErrorMessage name='username' component='div' className='text-danger' />
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="E-mailid"
                      name="email"
                      value={values.email}
                      onChange={(e)=>{handleChange(e);handleInputChange(e)}}
                      className='cc'
                    />
                    <ErrorMessage name='email' component='div' className='text-danger' />
                    <Form.Control
                      size="lg"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      onChange={(e)=>{handleChange(e);handleInputChange(e)}}
                      className='cc'
                    />
                    <ErrorMessage name='password' component='div' className='text-danger' />
                   <Link to='/Otpfirebase' ><Button size="lg" variant='' className='ff' type="submit">
                      {/* <span className='gg'><a href='Otp'>Next</a></span> */}
                    </Button>
                    </Link>
                  </form>
                )}
              </Formik>
            </Card.Body>
          </Card>
          {result && (
            <div>
              <p>Username: {result.username}</p>
              <p>Email: {result.email}</p>
              <p>Password: {result.password}</p>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Signup;