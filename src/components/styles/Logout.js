import React from 'react'
import { Button, Row, Col, Card} from 'react-bootstrap';
import { FaXTwitter } from "react-icons/fa6";

function Logout() {
    return (
        <div>
            <Row>
               
                <Col>
                    <Card className='d1'>
                        <Card.Body>
                               <p className='d2'> <FaXTwitter/></p>
                                <h4 className='f1'>Log out of X?</h4>
                                <p className='f2'>You can always log back in at any <br></br>time.
                                    If you just want to switch<br></br>accounts,
                                    you can do that by adding<br></br>an existing account. </p>
                                <Button  variant='' className='d3'>
                                    <span className='d5'>Log out</span>
                                </Button>
                                <br></br>
                                <Button  variant='' className='d4'>Cancel</Button>
                           
                        </Card.Body>
                    </Card>
                </Col>
              
            </Row>
        </div>
    )
}

export default Logout;