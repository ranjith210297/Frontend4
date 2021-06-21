import React from "react";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { CardGroup } from "react-bootstrap";
import "./login.css";
class Aboutus extends React.Component {
  render() {
    return (
      <div >
        {/* <ScrollBar component="div"> */}
      <Container
        style={{
          paddingTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
  


<>
<Card style={{ width: '50rem' }}>
  <Card.Img variant="top" src="blight.jpg" />
  <Card.Body>
    <Card.Title><h5>Cotton Leaf Disease Prediction</h5></Card.Title>
    <Card.Text>
      It is a leaf disease prediction application where you can scan a leaf or select an image from gallery to know whether the leaf is diseased or not. This app will be helpful for many farmers and even researchers for experimenting ans also eradicating the leaf diseases thus yielding a fruition crop. This App also has some special features like weather forecasting, Cotton leaf disease treatment methods and Youtube videos for treatments.
    </Card.Text>
  </Card.Body>
</Card>
  <br />
  
</>
        </Container>
        <br />
<h1 align="center">Cotton Leaf Diseases</h1>
        <Container>
          <br />
        <CardGroup>
  <Card>
    <Card.Img variant="top" src="blight.jpg" />
    <Card.Body>
      <Card.Title>Blight of cotton</Card.Title>
      <Card.Text>
      Blight of cotton caused by Xanthomonas axonopodis pv. malvacearum is an important bacterial disease. Foliar symptoms consist of dark brown to black, angular leaf spots that may progress along major leaf veins. As the disease progresses, petioles and stems may become infected, develop black cankers that girdle the petiole or stem and result in premature defoliation. Bolls may also become infected causing boll rots that discolor lint, and rot seeds.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src="fungal.jpg" />
    <Card.Body>
      <Card.Title>Fungal Leaf Spots</Card.Title>
      <Card.Text>
      Fungal leaf spots of cotton are minor diseases in Arkansas and rarely require a remedial action especially when they occur late in the season. Leaf spots are commonly observed when the cotton plant begins to flower as nutrients like potassium move from leaves to developing bolls. Nutrient deficient leaves are susceptible to relatively weak fungal pathogens that can cause leaf spots.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="leaf_spot.jpg" />
    <Card.Body>
      <Card.Title>Corynespora leaf spot</Card.Title>
      <Card.Text>
      Corynespora leaf spot or target spot is caused the fungus Corynespora cassiicola, which causes leaf spots on cucumber, sweet potato, soybean, tomato and cotton. On cotton, it begins a small brick-red spot which then leads to the formation of large (1/4 to 1in. in diam.) circular to irregular shaped spots with the typical target pattern.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
        </Container>
        </div>
        );
      }
    }
        
export default Aboutus;
