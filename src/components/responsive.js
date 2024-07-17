import { Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Responsive() {
    return (
        <>
            {/* <Row>
                <Col md={4} lg={3} sm={6} className='b1'><h2>Product 1</h2></Col>
                <Col md={4} lg={3} sm={6} className='b2'><h2>Product 2</h2></Col>
                <Col md={4} lg={3} sm={6} className='b3'><h2>Product 3</h2></Col>
                <Col md={4} lg={3} sm={6} className='b4'><h2>Product 4</h2></Col>
            </Row>  */}

             <Row>
                <Col xs={1} md={6} lg={1}>1</Col>
                <Col xs={1} md={6} lg={1}>2</Col>
                <Col xs={6} md={12} lg={8}><h1>Netflix</h1></Col>
                <Col xs={5} md={12} lg={2}><Button variant="danger">Danger</Button>{' '}
                    <Button variant="info">Info</Button>{' '}</Col>
            </Row> 


            {/* <p className='b5'>Hello GT</p> */}
        </>
    );
}

export default Responsive;