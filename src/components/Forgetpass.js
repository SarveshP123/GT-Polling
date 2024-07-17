import React from 'react'
import { CardBody, Row, Col, Card, Button } from 'react-bootstrap'
import './Forgetpass.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Forgetpass() {
    return (
        <div className='a111'>
            <Row>
                <Col md={4}></Col>
                <Col md={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <Card className="card11" style={{ alignItems: 'center', justifyContent: 'center' }} >
                <CardBody>
                    <Row>
                        <Row> <Col><h2>ForgetPassword</h2></Col></Row>
                        <Row><Col className='a44'>Mobile Number</Col></Row>
                        <Row><Col className='a55'><input type='text' className='a68'/></Col></Row>
                        <Row> <Col><Button variant="" className='a67'>Send Otp</Button> </Col></Row>
                        <Row><Col className='a44'>Enter Otp</Col></Row>
                        <Row><Col className='a55'><input type='text' className='a68' /></Col></Row>
                        <Row><Col><Button variant="" className='a66'>Next</Button></Col></Row>
                    </Row>
                </CardBody>
            </Card>
                </Col>
                <Col md={4}></Col>
            </Row>
        </div>
    )
}

export default Forgetpass