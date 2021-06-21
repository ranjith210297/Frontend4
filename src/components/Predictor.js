import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Nav, Col, Row } from "react-bootstrap";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import RealTimeScanner from "./RealTime_Scanner";
import "./login.css";
import FileUpload from "./FileUpload";

class Predictor extends React.Component {
  render() {
    return (
      <div>
      <Container fluid style={{ height: "auto" }}>
        <Row style={{ paddingTop: "10px", height: "auto" }}>
          <Col md={1} lg={1}></Col>
          &nbsp;
          <Col xs={12} md={10} sm={12} lg={10}>
            <TabContainer id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                  style={{ paddingTop: "20px", paddingBottom: "20px" }}
                >
                  <Nav  variant="pills" className="flex-row">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Capture/Load Image</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Real-Time Scanner</Nav.Link>
                    </Nav.Item>
                 
                  </Nav>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                  style={{ paddingTop: "20px", paddingBottom: "20px" }}
                >
                  <TabContent>
                    <TabPane eventKey="first">
                      <FileUpload />
                    </TabPane>

                    <TabPane eventKey="second">
                      <RealTimeScanner />
                    </TabPane>
                    
                  </TabContent>
                </Col>
              </Row>
            </TabContainer>
          </Col>
          &nbsp;
          <Col md={1} lg={1}></Col>
        </Row>
      </Container>
      {/* </ScrollBar> */}
      </div>
    );
  }
}

export default Predictor;
