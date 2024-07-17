import {
  Row,
  Col,
  Card,
  CloseButton,
  Button,
  FloatingLabel,
  Form,
  FormControl,
} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState, useRef, useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { CiCircleList } from "react-icons/ci";
import { PiSmiley } from "react-icons/pi";
import { LuCalendarClock } from "react-icons/lu";
import { TiLocationOutline } from "react-icons/ti";
import "bootstrap/dist/css/bootstrap.min.css";

function Polling() {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef(null);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    // Adjust the height of the textarea element based on its scroll height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scrollHeight
    }
  }, [inputValue]); // Dependency array includes inputValue

  const [show, setShows] = useState(false);
  const handleClose = () => setShows(false);
  const handleShows = () => setShows(true);

  const [choices, setChoices] = useState(["", ""]);

  const handleAddChoice = () => {
    setChoices([...choices, ""]);
  };

  const handleRemoveChoice = (index) => {
    const newChoices = [...choices];
    newChoices.splice(index, 1);
    setChoices(newChoices);
  };

  const handleChoiceChange = (index, value) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    setChoices(newChoices);
  };

  return (
    <>
      <Col className="b7">
        <Button variant="" className="b8" onClick={handleShows}>
          <span className="b6">Post</span>
        </Button>
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Button variant="" className="draft">
              Draft
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col md={11}>
            {" "}
            <textarea
              className="in1"
              ref={textareaRef}
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ask Something?!"
              rows={1} // Initial number of rows
            ></textarea>
          </Col>
          <Card className="card2">
            <Card.Body>
              {/* Choices */}
              {choices.map((choice, index) => (
                <Row key={index} className="row4">
                  <Col md={1}>
                    {index > 1 && (
                      <Button
                        variant="light"
                        className="buttonminus"
                        onClick={() => handleRemoveChoice(index)}
                      >
                        <AiOutlineMinus />
                      </Button>
                    )}
                  </Col>
                  <Col md={10} className="choice1">
                    <FloatingLabel
                      controlId={`choice${index}`}
                      label={`Choice ${index + 1}`}
                      className="float1"
                    >
                      <Form.Control
                        type="text"
                        placeholder={`Choice ${index + 1}`}
                        value={choice}
                        onChange={(e) =>
                          handleChoiceChange(index, e.target.value)
                        }
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md={1}>
                    {index === choices.length - 1 && (
                      <Button
                        variant="light"
                        className="buttonplus"
                        onClick={handleAddChoice}
                      >
                        <GoPlus />
                      </Button>
                    )}
                  </Col>
                </Row>
              ))}
              {/* Row 6 -No Col */}
              <Row className="hr">
                <hr />
              </Row>

              {/* Row 7 -No Col  */}
              <Row>
                <p className="polllength"> Poll length </p>
              </Row>

              {/* Row 8 - Col 3 */}
              <Row>
                <Col md={4} sm={2}>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Days"
                    className="days1"
                  >
                    <Form.Select aria-label="Days">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>

                <Col md={4} sm={2}>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Hours"
                    className="days2"
                  >
                    <Form.Select aria-label="Hours">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>

                <Col md={4} sm={2}>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Minutes"
                    className="days3"
                  >
                    <Form.Select aria-label="Minutes">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                      <option value="32">32</option>
                      <option value="33">33</option>
                      <option value="34">34</option>
                      <option value="35">35</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                      <option value="44">44</option>
                      <option value="45">45</option>
                      <option value="46">46</option>
                      <option value="47">47</option>
                      <option value="48">48</option>
                      <option value="49">49</option>
                      <option value="50">50</option>
                      <option value="51">51</option>
                      <option value="52">52</option>
                      <option value="53">53</option>
                      <option value="54">54</option>
                      <option value="55">55</option>
                      <option value="56">56</option>
                      <option value="57">57</option>
                      <option value="58">58</option>
                      <option value="59">59</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>

              {/* Row 9 - No col */}
              <Row className="row9">
                <Button variant="" size="lg" className="rmvpoll">
                  Remove poll
                </Button>
              </Row>
            </Card.Body>
          </Card>
          <Row>
            <Col md={7}>
              <button className="imgbutton">
                {" "}
                <CiImageOn />
              </button>
              <button className="imgbutton">
                {" "}
                <MdOutlineGifBox />{" "}
              </button>
              <button className="imgbutton">
                {" "}
                <CiCircleList />{" "}
              </button>
              <button className="imgbutton">
                {" "}
                <PiSmiley />{" "}
              </button>
              <button className="imgbutton">
                {" "}
                <LuCalendarClock />{" "}
              </button>
              <button className="imgbutton">
                {" "}
                <TiLocationOutline />{" "}
              </button>
            </Col>
            <Col md={5}>
              <Row>
                <Col md={6}>
                  <Button variant="" className="post">
                    Post
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Polling;
