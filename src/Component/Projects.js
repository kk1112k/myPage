import React from "react";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from "../img/p1.JPG";
import p2 from "../img/p2.JPG"
import p3 from "../img/p3.JPG"
import p4 from "../img/p4.JPG"
import d1 from "../img/d1.JPG"
import d2 from "../img/d2.JPG"
import "../css/bootstrap.css";
import { Container, Row, Col, UncontrolledCarousel, } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faCheck, faUser, faUsers, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"; 




const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};


function Projects() {
  return (
    <><div id="projects" className="padding-top-btm-5e">
        <div>
          <p className="menu-name font-color-pink">PROJECTS</p>
        </div>
        <Container>
          <Row>
            {/* 프로젝트 1번 포트폴리오 */}
            <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
              <div>
                <p className="font-bold-900 font-2">포트폴리오 웹 사이트</p>
                <p className="font-color-lightgray font-bold">
                  React로 SPA를 개발한 포트폴리오 사이트입니다.
                </p>
                <div className="padding-top-btm-1e">
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="icon-size-1e icon-color" />
                    <span className="padding-left-right-1e">개인</span>
                  </p>
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="icon-size-1e icon-color" />
                    <span className="padding-left-right-1e">2021.09 - 2021.09 (2주)</span>
                  </p>
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faCode}
                      className="icon-size-1e icon-color" />
                    <span className="keyword-yellow margin-left-1e margin-right-03e">React</span>
                    <span className="keyword-yellow margin-left-right-03e">CSS</span>
                    <span className="keyword-yellow margin-left-right-03e">Reactstrap</span>
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="icon-size-1e icon-color" />
                    <span className="keyword-gray margin-left-1e margin-right-03e">기획</span>
                    <span className="keyword-gray margin-left-right-03e">디자인</span>
                    <span className="keyword-gray margin-left-right-03e">개발</span>
                  </p>
                </div>
                <div className="padding-top-1e">
                  <a
                    href="http://kk1112k.github.io/port"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="icon-size-2e icon-color" />
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <Slider {...settings}>
              <div>
                <h3><img src={d1} className="hi" /></h3>
              </div>
              <div>
                <h3><img src={d2} className="hi" /></h3>
              </div>
              
              
            </Slider>
            </Col>
          </Row>

          <div className="bottom-line"></div>

          {/* 프로젝트 2번 블로그페이지 */}
          <Row>
            <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <Slider {...settings}>
            <div>
                <h3><img src={p1} className="hi" /></h3>
              </div>
              <div>
                <h3><img src={p2} className="hi" /></h3>
              </div>
              <div>
                <h3><img src={p3} className="hi" /></h3>
              </div>
              <div>
                <h3><img src={p4} className="hi" /></h3>
              </div>
              </Slider>
            </Col>
            <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
              <div>
                <p className="font-bold-900 font-2">카페 예약 사이트</p>
                <p className="font-color-lightgray font-bold">
                  풀스택으로 개발한 카페 자리예약사이트 입니다.
                </p>
                <div className="padding-top-btm-1e">
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="icon-size-1e icon-color" />
                    <span className="padding-left-right-1e">5명</span>
                    <span className="keyword-gray margin-left-right-03e">기여도 <span className="font-red">70</span> %</span>
                  </p>
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="icon-size-1e icon-color" />
                    <span className="padding-left-right-1e">2021.08 - 2021.09 (2개월)</span>
                  </p>
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faCode}
                      className="icon-size-1e icon-color" />
                    <span className="keyword-yellow margin-left-1e margin-right-03e">HTML5</span>
                    <span className="keyword-yellow margin-left-right-03e">CSS3</span>
                    <span className="keyword-yellow margin-left-right-03e">Bootstrap</span>
                  </p>
                  <p className="font-bold">
                    <span className="keyword-yellow">JavaScript</span>
                    <span className="keyword-yellow margin-left-right-03e">Java</span>
                    <span className="keyword-yellow margin-left-right-03e">Spring</span>
                    <span className="keyword-yellow margin-left-right-03e">Oracle</span>
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="icon-size-1e icon-color" />
                    <span className="keyword-gray margin-left-1e margin-right-03e">기획</span>
                    <span className="keyword-gray margin-left-right-03e">디자인</span>
                    <span className="keyword-gray margin-left-right-03e">개발</span>
                  </p>
                </div>
                <div className="padding-top-1e">
                  <a
                    href="https://diligent-lung-980.notion.site/8142a2783507410cb71fb938e0749bd1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="icon-size-2e icon-color" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>

        </Container>
      </div></>
  );
}

export default Projects;
