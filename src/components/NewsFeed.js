import React from 'react'
import './NewsFeed.css'
import { useState, useRef, useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Card, Row, Col, FloatingLabel, Form, CardBody, Button, CloseButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { PiSmiley } from "react-icons/pi";
import { FcGlobe } from "react-icons/fc";
import { GoPlus } from "react-icons/go";
import { LuCalendarClock } from "react-icons/lu";
import { TiLocationOutline } from "react-icons/ti";

function NewsFeed() {


  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    // Adjust the height of the textarea element based on its scroll height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scrollHeight
    }
  }, [inputValue]); // Dependency array includes inputValue

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" className='w1' onClick={handleShow}>
       <span className='w3'>NewsFeed</span> 
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title><Button variant="">Draft</Button></Modal.Title>
        </Modal.Header>
        <Modal.Body>



          <Row>
            <Col md={1}>  <CgProfile className='cg1' /></Col>
            <Col md={11}>   <textarea
              className='in1'
              ref={textareaRef}
              value={inputValue}
              onChange={handleInputChange}
              placeholder='What is Happening?!'
              rows={1} // Initial number of rows
            ></textarea></Col>
          </Row>
          <Row>
            <Col md={6} >  <Button variant="" className='r1'><FcGlobe/>Everyone can reply</Button> </Col>
            <Col md={6}></Col>

          </Row>
          <hr />





          {/* <Modal.Footer> */}
          <Row>
            <Col md={7}>
              <button className='imgbutton'>  <CiImageOn /></button>
              <button className='imgbutton'> <MdOutlineGifBox /> </button>
              <button className='imgbutton'> <CiCircleList />   </button>
              <button className='imgbutton'> <PiSmiley />  </button>
              <button className='imgbutton'> <LuCalendarClock /> </button>
              <button className='imgbutton'> <TiLocationOutline /> </button>
            </Col>
            <Col md={5}>
              <Row>
                <Col md={6}>
                  {/* <button className='imgbutton1'> <GoPlus /> </button> */}
                </Col>
                <Col md={6}>
                  <Button variant="info" className='post'> Post</Button>{' '}
                </Col>
              </Row>
            </Col>
          </Row>
          {/* </Modal.Footer> */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewsFeed;