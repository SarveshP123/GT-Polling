import React, { useState, useEffect } from "react";
import "./Homepage.css";
import { Card, Row, Col, CardBody, Button, Footer } from "react-bootstrap";
import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoSearch, IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { RiFileListLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { CgMoreO } from "react-icons/cg";
import { RiTwitterXLine } from "react-icons/ri";
import { CiSquareCheck, CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import image2 from "../images/image2.jpg.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Pollingpage from "./Pollingpage";
import NewsFeed from "./NewsFeed";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { CgProfile } from "react-icons/cg";
import Offcanvas from "react-bootstrap/Offcanvas";

function Homepage() {
  let [showPollingpage, setShowPollingpage] = useState(false);
  let handlePoll = () => {
    setShowPollingpage(true);
  };

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const email = sessionStorage.getItem("email");
  console.log(email);
  const displayName = sessionStorage.getItem("displayName");
  console.log(displayName);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  let [news, setNews] = useState(true);
  let handleNews = () => {
    setNews(true);
  };

  const handleLogout = () => {
    console.log("Logout");
    sessionStorage.removeItem("displayName");
    navigate("/");
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ backgroundColor: "black", height: "200vh" }}>
      <div className="india">
        <Row>
          <Col>
            {" "}
            <Button variant="" onClick={handleShow} className="mobbileaa1">
              <RiTwitterXLine className="mobileaa2" />
            </Button>
          </Col>
          <Col>
            {" "}
            <Pollingpage className="postmobile" />
          </Col>
        </Row>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Button variant="" onClick={handleShow} className="mobbilea1">
                <CgProfile />
              </Button>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Row>
              <Col>
                <Button variant="" className="mobilea1">
                  <CiUser className="mobilea2" />
                  <span className="mobilea3"> Profile</span>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="" className="mobilea1">
                  <FaXTwitter className="mobilea2" />
                  <span className="mobilea3">Premium</span>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="" className="mobilea1">
                  <RiFileListLine className="mobilea2" />
                  <span className="mobilea3"> Lists</span>
                </Button>
              </Col>
            </Row>
            <Row>
              {" "}
              <Col>
                <Button variant="" className="mobilea1">
                  <FaRegBookmark className="mobilea2" />
                  <span className="mobilea3"> Bookmarks</span>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="" className="mobilea1">
                  <IoSettingsOutline className="mobilea2" />
                  <span className="mobilea3"> Setting</span>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="" onClick={handleLogout} className="mobilea1">
                  <CgMoreO className="mobilea2" />
                  <span className="mobilea3"> Log out</span>
                </Button>
              </Col>
            </Row>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <Row>
        <Col>
          <div className="india1">
            <Row>
              <Col md={3} sm={2}></Col>
              <Col md={12} sm={12} className="col1">
                <Button variant="" className="b1">
                  <FaXTwitter className="b2" />
                </Button>
                <Row>
                  <Col>
                    <Button variant="" className="b5">
                      <GoHomeFill className="b4" />
                      <span className="b3"> Home</span>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="" className="b5">
                      <IoSearch className="b4" />
                      <span className="b3"> Explore</span>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="" className="b5">
                      <IoNotificationsOutline className="b4" />{" "}
                      <span className="b3"> Notifications</span>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="" className="b5">
                      <HiOutlineMail className="b4" />
                      <span className="b3"> Messages</span>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="" className="b5">
                      <CiSquareCheck className="b4" />
                      <span className="b3"> Grok</span>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="" className="b5">
                      <RiFileListLine className="b4" />
                      <span className="b3"> Lists</span>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="" className="b5">
                      <FaRegBookmark className="b4" />
                      <span className="b3"> Bookmarks</span>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="" className="b5">
                      <LuUsers2 className="b4" />{" "}
                      <span className="b3"> Communities</span>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="" className="b5">
                      <FaXTwitter className="b4" />{" "}
                      <span className="b3"> Premium</span>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="" className="b5">
                      <CiUser className="b4" />
                      <span className="b3"> Profile</span>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="" onClick={handleLogout} className="b5">
                      <CgMoreO className="b4" />{" "}
                      <span className="b3"> Log out</span>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col className="b7">
                    <Pollingpage />
                  </Col>
                </Row>
                {displayName && (
                  <div style={{ color: "white" }}> Hello, {displayName}</div>
                )}
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={8} sm={10} xs={10} lg={4} style={{ display: "flex" }}>
          <Row>
            <Card className="card1">
              <CardBody>
                <Row>
                  <Col md={5} sm={5} xs={4}>
                    {/* <Link to='/Pollingpage'><Button variant="" className='w1'><span className='w2'> Poll</span></Button></Link> */}
                    <Button variant="" className="w1">
                      <span className="w2"> Poll</span>
                    </Button>
                  </Col>

                  <Col md={5} sm={5} xs={4}>
                    <NewsFeed onClick={handleNews} />
                  </Col>

                  <hr />
                </Row>
              </CardBody>
              {/* <Row>
              <Col><GoHomeFill />< CiSearch /><CiSquareCheck /><RiFileListLine /><LuUsers2 /><IoNotificationsOutline /></Col>
              </Row> */}
            </Card>
          </Row>
        </Col>
        <Col lg={4}>
          <Row>
            <Col className="box">
              <Button variant="" className="se">
                <CiSearch className="icon1" />
                <span className="ch">Search</span>
              </Button>
              <Card className="boo" style={{ width: "25rem" }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    <h3 className="a9">Subscribe to Premim</h3>
                  </Card.Subtitle>
                  <Card.Text>
                    Subscribe to unlock new features and if eligible, receive a
                    share of ads revenue.
                  </Card.Text>
                  <Button variant="" className="a11">
                    Subscribe
                  </Button>
                </Card.Body>
              </Card>
              <br />
              <Card className="boo" style={{ width: "25rem" }}>
                <Card.Body>
                  <Card.Title>
                    <h3 className="a12">What's happening</h3>
                  </Card.Title>
                  <Row>
                    <Col>
                      <Card.Subtitle className="mb-2 text-muted">
                        <Col className="op1">
                          <Button variant="" className="ok">
                            <img className="a13" src={image2} />
                            <span className="all">
                              ALL IN THE BOSTON CELTICS
                            </span>
                          </Button>
                        </Col>
                      </Card.Subtitle>
                    </Col>
                    <Row>
                      <Col>
                        <p className="sp">Sports . 1 hour ago</p>
                      </Col>
                    </Row>
                  </Row>
                  <hr className="rh" />
                  <Card.Text>
                    <Button variant="" className="ok">
                      <span className="txt">Sports.Trending</span>
                      <br />
                      <span className="rcb">#INDvsPAK</span>
                      <br />
                      <span className="post">106kPosts </span>
                    </Button>
                    <Row>
                      <Button variant="">
                        <Col md={1}>
                          <BsThreeDots className="three" />
                        </Col>
                      </Button>
                    </Row>
                    <Button variant="" className="koo">
                      <span className="enti">Entertinment.Trending</span>
                      <br />
                      <span className="rcb">#Kalki2898Ad</span>
                      <br />
                      <span className="post">59kPosts</span>
                    </Button>
                    <Row>
                      <Button variant="">
                        <Col md={1}>
                          <BsThreeDots className="three" />
                        </Col>
                      </Button>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Homepage;
