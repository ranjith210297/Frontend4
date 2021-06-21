import React, { useState } from "react";
import * as ml5 from "ml5";
import {Row, Col } from 'react-bootstrap';

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ReactPlayer from 'react-player';
import Api1 from "./Api1.js";
import Loader from "react-loader-spinner";

const Chart = (props) => {
  const data = props.data;
  const label = data.label;
  const confidence = parseFloat(data.confidence.toFixed(3));
  
  console.log(label, confidence);
  return (
    <div>
      <h4>
        <b>Leaf Disease</b>
      </h4>
      <h5 id="labelres" style={{ color: "#00FF00" }}>{label}</h5>
     
    </div>
  );
};

function FileUpload() {
  const [file, setFile] = React.useState("");
  const [result, setResult] = useState([]);

  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  const classifier = ml5.imageClassifier("../../model/model.json", modelLoaded);

  function modelLoaded() {
    console.log("Model Loaded!");
  }

  function classifyImg() {
    classifier.classify(document.getElementById("image"), (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
      setResult(results);
    });
  }

  

  const toggle = () => {
    classifyImg();
    setResult([]);
  };

  const ImageThumb = ({ image }) => {
    return (
      <img
        style={{ objectFit: "cover" }}
        src={URL.createObjectURL(image)}
        id="image"
        width="150px"
        height="150px"
        alt={image.name}
      />
    );
  };

  return (
    <div >
    {/* <ScrollBar component="div"> */}
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
              maxHeight: "190vh",
            }}
          >
            <Card.Header>Browse Image</Card.Header>
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                className="form-control"
                input="image"
                id="inp"
                type="file"
                onChange={handleUpload}
              />
              <br />

              <div>{file && <ImageThumb image={file} />}</div>
              <div>
                <br />

  

                <Button
                  id="button"
                  
                  variant="outline-info"
                  onClick={() => toggle()} >
                        <span className="sr-only"><b>Predict Image</b></span>
                </Button>
                <br />
                <br />
                <Card.Header>Predicted Output</Card.Header>
                <br />
                {result.length > 0 ? (
                  <div>
                  <Chart data={result[0]} />
                  <Api1 />
                  </div>
                ) : (
                <Loader type="ThreeDots" color="#00CC00" height={100} width={100} />
              )}
  
        

              </div>
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
              maxHeight: "500vh",
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
    {/* </ScrollBar> */}
    </div>
  );
}

export default FileUpload;
