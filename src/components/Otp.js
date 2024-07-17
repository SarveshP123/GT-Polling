import React, { useState } from 'react';
import { Button, Row, Col, Card, Form, CloseButton } from 'react-bootstrap';
import { FaXTwitter } from "react-icons/fa6";
import * as yup from 'yup';
import { Formik, ErrorMessage, Field, Form as FormikForm } from 'formik';
import { Link } from 'react-router-dom';

function Otp() {
  const [result, setResult] = useState();
  const schema = yup.object().shape({
    mobilenumber:
      yup.string()
        .matches(/^\d+$/, 'Mobile number must contain only digits')
        .min(10, 'Mobile number must be at least 10 digits')
        .max(10, 'Mobile number must be at most 10 digits')
        .required("Mobile number is required"),
    otp:
      yup.string()
        .matches(/^\d{6}$/, 'OTP must be exactly 6 digits and contain only numbers')
        .required("OTP is required")
  });

  const handleSubmit = (values) => {
    setResult(values);
  };

  return (
    <div style={{backgroundColor:"black",height:"100vh",overflow:"hidden"}}>
      <Row>
        <Col>
          <Card className='aa'>
            <Card.Body>
              <Formik
                initialValues={{ mobilenumber: "", otp: "" }}
                validationSchema={schema}
                onSubmit={handleSubmit}
              >
                {({ handleSubmit, handleChange, values }) => (
                  <FormikForm onSubmit={handleSubmit} noValidate>
                    <CloseButton className='dd' />
                    <p className='d2'><FaXTwitter className='ee' /></p>
                    <h1 className='xx'>OTP</h1>
                    <Field 
                      name="mobilenumber"
                      type="text"
                      placeholder="Mobile Number"
                      className='cc'
                      as={Form.Control}
                      size="lg"
                    />
                    <ErrorMessage name='mobilenumber' component='div' className='text-danger' />
                    <Field 
                      name="otp"
                      type="text"
                      placeholder="Enter OTP"
                      className='cc'
                      as={Form.Control}
                      size="lg"
                    />
                    <ErrorMessage name='otp' component='div' className='text-danger' />
                    <Link to='/Homepage'> <Button type="submit" size="lg" variant='' className='ff'>
                     <span className='ggg'>Enter</span> 
                    </Button></Link> 
                  </FormikForm>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Otp;