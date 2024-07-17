import React from 'react'
import { useState } from 'react';
import { Card, Row, Col, CardBody, Button, } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgProfile } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

import { RiFileListLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiSquareCheck, CiUser } from "react-icons/ci";
import { CgMoreO } from "react-icons/cg";
import './Navbar.css'

function Navbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Button variant="" onClick={handleShow} className="mobbileaa1"><CgProfile className="mobileaa2"/></Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><Button variant="" onClick={handleShow} className="mobbileaa1"><CgProfile /></Button></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row><Col><Button variant="" className="mobilea1"><CiUser className="mobilea2" /><span className="mobilea3"> Profile</span></Button></Col></Row>
                    <Row><Col><Button variant="" className="mobilea1"><FaXTwitter className="mobilea2" /><span  className="mobilea3">Premium</span></Button></Col></Row>
                    <Row><Col><Button variant="" className="mobilea1"><RiFileListLine className="mobilea2" /><span className="mobilea3"> Lists</span></Button></Col></Row>
                    <Row> <Col><Button variant="" className="mobilea1"><FaRegBookmark className="mobilea2" /><span className="mobilea3"> Bookmarks</span></Button></Col></Row>
                    <Row><Col><Button variant="" className="mobilea1"><IoSettingsOutline className="mobilea2" /><span className="mobilea3">Setting</span></Button></Col></Row>
                    <Row><Col><Button variant=""  className="mobilea1"><CgMoreO className="mobilea2" /><span className="mobilea3">Log out</span></Button></Col></Row>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Navbar