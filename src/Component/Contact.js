import React from "react";
import "../App.css";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div id="contact" className="background-color-gray padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-pink">CONTACT</p>
      </div>
      <Container>
        <Row>
          <Col xs={12} sm={4} md={4}>
            <FontAwesomeIcon icon={faPhoneSquare} className="icon-size" />
            <p className="font-bold font-1H font-color-bl">Phone</p>
            <p className="font-bold font-color-lightgray">
              010 - 5795  - 0939
            </p>
          </Col>

          <Col xs={12} sm={4} md={4}>
            <FontAwesomeIcon icon={faEnvelope} className="icon-size" />
            <p className="font-bold font-1H font-color-bl">Email</p>
            <p className="font-bold font-color-lightgray">
              kk1112k@naver.com
            </p>
          </Col>

          <Col xs={12} sm={4} md={4}>
          <a
                    href="https://github.com/kk1112k"
                    target="_blank"
                    rel="noopener noreferrer"
                  ><FontAwesomeIcon icon={faGithub} className="icon-size" /></a>
            <p className="font-bold font-1H font-color-bl">Github</p>
            <p className="font-bold font-color-lightgray">       
            https://github.com/kk1112k
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;