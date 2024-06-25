import React from "react";
import { Col, Row } from "react-bootstrap";
import '../pages/About.css';
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiExpress,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus style={{ fontSize: "50px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={{ fontSize: "50px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava style={{ fontSize: "50px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{ fontSize: "50px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 style={{ fontSize: "50px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 style={{ fontSize: "50px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{ fontSize: "50px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap style={{ fontSize: "50px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{ fontSize: "50px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress style={{ fontSize: "50px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql style={{ fontSize: "50px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{ fontSize: "50px" }} />
      </Col>
    </Row>
  );
}

export default Techstack;
