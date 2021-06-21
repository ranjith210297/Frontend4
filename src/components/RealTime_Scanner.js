import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";

import Button from "react-bootstrap/Button";
import Loader from "react-loader-spinner";
import useInterval from "@use-it/interval";
import Container from "react-bootstrap/Container";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Col, Row, Card } from "react-bootstrap";
import ReactPlayer from 'react-player';
import Api1 from "./Api1.js";
import "./login.css";

let classifier;

const Chart = (props) => {
  const data = props.data;
  const label = data.label;
  const confidence = parseFloat(data.confidence.toFixed(2));
  
  console.log(label, confidence);
  return (
    <div>
      <h3>
        <b>Leaf Disease</b>
      </h3>
      <h5 style={{ color: "#ffd11a" }}>{label}</h5>
      
    </div>
  );
};

function RealTimeScanner() {
  const videoRef = useRef();
  const [start, setStart] = useState(false);
  const [result, setResult] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    classifier = ml5.imageClassifier("../../model/model.json", () => {
      navigator.mediaDevices
        .getUserMedia({ video: {facingMode:"environment"}, audio: false })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();

          setLoaded(true);
        });
    });
  }, []);

  useInterval(() => {
    if (classifier && start) {
      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setResult(results);
      });
    }
  }, 500);

  const toggle = () => {
    setStart(!start);
    setResult([]);
  };

  return (
    <div >
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6}>
          <Card
            bg="transparent"
            text="dark"
            border="success"
            className="text-center"
            style={{
              borderRadius: "2%",
              borderWidth: "3px",
              minHeight: "55vh",
              maxHeight: "170vh",
            }}
          >
            <Card.Header>Real Time Scanning</Card.Header>
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Loader
                type="Oval"
                color="#02b875"
                height={100}
                width={100}
                visible={!loaded}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginTop: "25px",
                  alignItems: "center",
                }}
              />

              <div
                className="container"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <video
                  ref={videoRef}
                  style={{ transform: "scale(-1, 1)" }}
                  width="200"
                  height="200"
                />
                <br />
                {loaded && (
                  <Button variant="outline-info"  onClick={() => toggle()}>
                   <span className="sr-only"><b> {start ? "Stop" : "Start"}</b></span>
                  </Button>



                )}
                              <br />

              <Card.Header>Prediction Results</Card.Header>
              <br />

              {result.length > 0 ? (
                <div>
                  <Chart data={result[0]} />
                  <Api1 />
                </div>
              ) : (
                <Loader type="ThreeDots" color="#02b875" height={50} width={100} />
              )}
              </div>
              <br />
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6}>
        <br />

          <Card
            bg="success"
            text="dark"
            border="success"
            className="text-center"
            style={{
              borderRadius: "2%",
              borderWidth: "3px",
              minHeight: "55vh",
              maxHeight: "300vh",
            }}
        

          >
            <Card.Header><b>Treatment Methods</b></Card.Header>
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              
   

  

                
                {result.length > 0 ? (
                  <div justify>
                    <Container justify>
                      
                      <Row className="show-grid" >
                      <Col xs={12} sm={12} >

                        <b>Blight of Cotton</b>
                        <p style={{textAlign:"justify"}}>Blight of cotton (also called Angular Leaf Spot) is an important bacterial disease. Foliar symptoms consist of dark brown to black, angular leaf spots (Fig. 1) that may progress along major leaf veins.</p>
                        </Col>
             
                        <Col xs={12} sm={12} >

                        <b>Cure</b>
                        <p style={{textAlign:"justify"}}>Fields with documented bacterial blight should be planted with a blight-resistant cultivar the following year or rotated with a non-host crop like corn, grain sorghum, peanut, and soybean.</p>
                        </Col>
                        <Col xs={12} sm={12} >

                        <b>Fungal Leaf Spots</b>
                        <p style={{textAlign:"justify"}}>This disease turns the leaf color to brown or gray spots with reddish-purple margins. </p>
                        </Col>
                        <Col xs={12} sm={12} >

                        <b>Cure</b>
                        <p style={{textAlign:"justify"}}>Recommended nutrient requirements for healthy cotton production is usually sufficient to manage fungal leaf spot of cotton.</p>
                        </Col>
                        <Col xs={12} sm={12} >

                        <b>Corynespora leaf spot</b>
                        <p style={{textAlign:"justify"}}>On cotton, it begins a small brick-red spot which then leads to the formation of large (1/4 to 1in. in diam.) circular to irregular shaped spots with the typical target pattern.</p>
                        </Col>
                        <Col xs={12} sm={12} >

                        <b>
                          Cure
                        </b>
                        <p style={{textAlign:"justify"}}>Thus, a single application of a fungicide late in the season may limit some defoliation in mid and upper canopy</p>
                      </Col>
                      
                      </Row>

                    </Container>
                  
                  </div>
                ) : (
                <Loader type="ThreeDots" color="#00CC00" height={100} width={100} />
              )}
  
              {result.length > 0 ? (
                   <div className="Youtube">
                     <h4>Treatment Recommendation Videos</h4>
                   <ReactPlayer 
                   width="70%"
                   height="50%"
                   url='https://www.youtube.com/watch?v=gtPHQvYyX48' />
               </div>
                ) : (
                  []
                  )}

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default RealTimeScanner;
