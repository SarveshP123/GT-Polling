import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Password.css";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { Button, Row, Col, Card, Form, CloseButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Validtask() {
  const [state, setState] = useState({
    password: "",
    confirmpassword: "",
  });
  const [result, setResult] = useState();
  const schema = yup.object().shape({
    password: yup
      .string()
      .matches(/^\d{6}$/, "Need 6 digits")
      .required("password is required"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match"),
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let navigate=useNavigate()
  const handleSubmit = () => {
    console.log(state);
    navigate('/Otpfirebase1')
    
  };
  let navi=useNavigate()
  const handleSign = () => {
    console.log(state);
    navi('/Twitsignin1')
    
  };

  return (
    <div className="a1">
      <Row>
        <Col md={4} sm={3} xs={1}></Col>

        <Col md={4} sm={7} xs={10}>
          <div className="v1">
            <Card style={{ width: "320px" }} className="a2">
              <Card.Body>
                <Row>
                  <Col md={1}>
                    <CloseButton />{" "}
                  </Col>
                  <Col md={11} className="a5">
                    <Card.Title>Forgot Password</Card.Title>
                  </Col>
                </Row>
                {/* <Card.Text> */}
                <Formik
                  initialValues={state}
                  validationSchema={schema}
                  onSubmit={handleSubmit}
                  enableReinitialize
                >
                  {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} noValidate>
                      <Row>
                        <Col className="a3">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="a6">
                              {" "}
                              New Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              value={state.password}
                              onChange={(e) => handleChange(e)}
                              style={{ width: "280px" }}
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="text-danger"
                            />
                            <br />
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="a6">
                              Confirm Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              name="confirmpassword"
                              value={state.confirmpassword}
                              onChange={(e) => handleChange(e)}
                              style={{ width: "280px" }}
                            />
                            <ErrorMessage
                              name="confirmpassword"
                              component="div"
                              className="text-danger"
                            />
                            <br />
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Button variant="" type="submit" className="a4" onClick={handleSign}>
                        LOGIN
                      </Button> 
                    </form>
                  )}
                </Formik>

                {/* </Card.Text> */}
              </Card.Body>
            </Card>
          </div>
          {result && (
            <div>
              <p>password: {result.password}</p>
              <p>confirmpassword: {result.confirmpassword}</p>
            </div>
          )}
        </Col>
        <Col md={4} sm={2} xs={1}></Col>
      </Row>
    </div>
  );
}

export default Validtask;
