import React from "react";
import "../css/Home.css";
import "../css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";
import Fade from 'react-reveal/Fade';

function Home() {
    return (
      
      <div id="home">
       
        <Container className="home-container">
          <Row>
            <Col xs={15} sm={10} md={12}>
                <div className="title">
                  <Fade left> <div className="font-bold"> Hello, I’m
                      <span className="font-color-pink"> SoHee2</span>
                    </div></Fade>                
                  <Fade right className="title2">
                  <div className="font-bold"> Go-getter developer</div>
                </Fade>
         </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
export default Home;
