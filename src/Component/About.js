import React from "react";
import "../App.css";
import "../css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import profile from "../img/a_profile.png";
import profile2 from "../img/tit1.png";


const About = () => {
 return (
  
    <div id="about" className="padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-orange">ABOUT</p>
      </div>
      <Fade up>
      <Container>    
        
  
        {/* profile */}
        <Row>
          <Col xs={9} sm={5} md={6}>
              <p className="font-bold-900 font-1H font-color-bl">
                PROFILE
              </p>
            
            <img src={profile} />
            
            
          </Col>
          {/* education, career */}
          
          <Col xs={10} sm={6} md={6}>
            <div className="">
              <div>
              <img src={profile2}  className="photo2"/>
              </div>
              <div>
              <div>
                <p className="font-bold-900 font-1H font-color-bl">EDUCATION</p>
              </div>
                <p className="font-color-lightgray font-bold-700">
                  
                  <span className="padding-left-right-1e">인하공전 메카트로닉스과 졸업</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                 
                  <span className="padding-left-right-1e">2017.03 - 2021.02</span>
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className="font-bold-900 font-1H font-color-bl">CAREER</p>
              </div>
              <div>
                <p className="font-color-lightgray font-bold-700">
                  
                  <span className="padding-left-right-1e">인천일보아카데미 수료</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                  
                  <span className="padding-left-right-1e">2021.05 - 2021.10 (5개월)</span>
                </p>
                <p className="font-color-bl font-bold-700">
                  
                  <span className="keyword-yellow margin-left-1e margin-right-03e">HTML5</span> 
                  <span className="keyword-yellow margin-left-right-03e">CSS3</span> 
                  <span className="keyword-yellow margin-left-right-03e">Bootstrap</span>
                  <span className="keyword-yellow margin-left-right-03e">Java</span>
                </p>

                <p className="font-color-bl font-bold-700">
                  <span className="keyword-yellow">JavaScript(jQuery)</span> 
                  <span className="keyword-yellow margin-left-right-03e">Spring</span> 
                  <span className="keyword-yellow margin-left-right-03e">Oracle</span>
                </p>
              </div>
              <div className="bottom-line-small"></div>
              
              <div>
               
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          {/* keywords */}     
          <Col xs={12} sm={4} md={4} className="padding-top-btm-2e">     
            <p className="font-bold-700 font-1H padding-top-2e">
              긍정
            </p>
            <p className="font-color-lightgray padding-btm-1e">
              항상 긍정적으로 생각합니다.
            </p>
          </Col>        
          <Col xs={12} sm={4} md={4} className="padding-top-btm-2e">      
            <p className="font-bold-700 font-1H padding-top-2e">
              끈기
            </p>
            <p className="font-color-lightgray padding-btm-1e">
              쉽게 포기하지 않습니다.
            </p>
          </Col>          
          <Col xs={12} sm={4} md={4} className="padding-top-btm-2e">   
            <p className="font-bold-700 font-1H padding-top-2e">
              {/* <span className="keyword-yellow">협력</span> */}
              협력
            </p>
            <p className="font-color-lightgray padding-btm-1e">
              서로 협력하며 일하는 것을 좋아합니다.
            </p>
          </Col>
        </Row>
      </Container>
      </Fade>
    </div>
  );
}

export default About;
