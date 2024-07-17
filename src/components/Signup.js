import React, { useState } from 'react';
import { Button, Row, Col, Card, Form, CloseButton } from 'react-bootstrap';
import { FaXTwitter } from "react-icons/fa6";
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css'
import { useNavigate,Link } from 'react-router-dom';

function Signup() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [result, setResult] = useState();
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().required("Password is required")
      .matches(/^\d{6}$/, 'Password must be exactly 6 digits and contain only numbers')
  });
  

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
    let navigate=useNavigate()
  const handleSubmit = (values) => {
    setResult(values);
    navigate('/Otpfirebase2')
  };

  return (
    <div style={{backgroundColor:"black",height:"100vh",overflow:"hidden"}}>
      <Row>
        <Col md={4} sm={3}></Col>
        <Col md={4} sm={6}>
          <Card className='aa'>
            <Card.Body>
              <Formik
                initialValues={state}
                validationSchema={schema}
                onSubmit={handleSubmit}
                enableReinitialize>
                {({ handleSubmit, handleChange, values }) => (
                  <form onSubmit={handleSubmit} noValidate>
                  <Link to='/Twitsignin1' ><CloseButton className='dd'  /></Link>
                    <p className='d2'><FaXTwitter className='ee' /></p>
                    <h1 className='bb'>Create your account</h1>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      className='cc'
                    />
                    <ErrorMessage name='username' component='div' className='text-danger' />
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className='cc'
                    />
                    <ErrorMessage name='email' component='div' className='text-danger' />
                    <Form.Control
                      size="lg"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      className='cc'
                    />
                    <ErrorMessage name='password' component='div' className='text-danger' />
               <Button size="lg" variant='' className='ffg' type="submit">
                      <span className='ggg'>Next</span>
                    </Button> 
                  </form>
                )}
              </Formik>
            </Card.Body>
          </Card>
          {result && (
            <div>
              console.log(result.username,result.email,result.password)
            </div>
          )}
        </Col>
        <Col md={4} sm={3}></Col>
      </Row>
    </div>
  );
}

export default Signup;