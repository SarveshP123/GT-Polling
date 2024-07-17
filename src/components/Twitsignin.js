import React, { useEffect, useState } from 'react';
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import './styles/Twitsignin.css'
import { Row, Col, Card, Button, FloatingLabel, CloseButton, Form } from 'react-bootstrap';
import { RiTwitterXLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { BiColor } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Homepage from './Homepage';






function Twitsignin() {

    let [value, setValue] = useState(null)
    // let navigate=useNavigate()

    // const handleClick = () => {
    //     signInWithPopup(auth, provider).then((data) => {
    //         setValue(data.user.email)
    //        localStorage.setItem("email", data.user.email)
    //         // navigate('/Pollingpage')
    //     })
    // }

    // useEffect(() => {
    //     const email = localStorage.getItem("email");
    //     if (email) {
    //         setValue(email);
    //     }
    // }, []);
    let handleClick=async()=>{

        try {
          console.log("handleclick")
          const data = await signInWithPopup(auth, provider);
          console.log(data.user)
          console.log(data.user.email)
          // setValue(data.user.email)
          // localStorage.setItem("email", data.user.email)
        } catch (error) {
          if (error.code === 'auth/popup-closed-by-user') {
            console.log("Popup closed by user, no action needed.");
          } else {
            console.error(error);
          }
        }
      }




    return (
        <div>
            {value ? <Homepage className="q1"/> : (
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Row className='n7'>
                            <Col md={2} > </Col>
                            <Col md={8}>
                                <Card className='n2'>
                                    <Card.Body>
                                        <Row>
                                            <Col md={1}>
                                                <div data-bs-theme="dark">
                                                    <CloseButton className='close' />
                                                </div>
    </Col>

                                            <Col md={11}>

                                                <div> <h1 className='n1'>  <RiTwitterXLine /></h1></div>

                                            </Col>
                                        </Row>

                                        <h3 className='n3'> Sign in to X </h3>

                                        <div className='n6'>



                                            <Button variant="light" className='n4' onClick={handleClick}><span className='n5'><FcGoogle /> Sign in with Google</span></Button>
                                            <Button variant="light" className='n4'><span className='n5'><DiApple /> Sign in with Apple</span></Button>


                                            <Row>
                                                <Col md={2}> </Col>
                                                <Col md={3} className='k1'><hr /></Col>
                                                <Col md={2} className='or'> or</Col>
                                                <Col md={3} className='k2'> <hr /></Col>
                                                <Col md={2}></Col>



                                                {/* <hr className='g1' /> */}

                                            </Row>


                                            <FloatingLabel controlId="floatingInputGrid" label="Phone,email or username" className='c1'>
                                                <Form.Control type="any" placeholder="name@example.com" className='c2' />
                                            </FloatingLabel>

                                            <Button variant="light" className='f1'>Next</Button>{' '}
                                            <Button variant="light" className='f2'>Forgot password?</Button>{' '}




                                            <p className='m1'> Don't have an account? <span><a href='/Createacc' className='m2'>Sign up</a></span>  </p>






                                        </div>




                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={2}></Col>
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            )}
        </div>
    )
}

export default Twitsignin
