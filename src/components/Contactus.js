import React from "react";
import {Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";


class Contactus extends React.Component {
  render() {
    return (
      <div>
      <Container>
<br />
          <Card className="text-center">
  <Card.Header>Contact Us</Card.Header>
  <Card.Body>
    <Card.Title>Ranjith Kumar Kanikaram</Card.Title>
    <Card.Text>
      <url>ranjeeth2197@gmail.com</url>
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">9550488754</Card.Footer>
</Card>
  
      </Container>

      <Container>
        <br />
<Card className="text-center">
  <Card.Header>Contact Us</Card.Header>
  <Card.Body>
    <Card.Title>Naveen Sai Ram K</Card.Title>
    <Card.Text>
    <url>naveenkatragadda623@gmail.com</url>

    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">9704653534</Card.Footer>
</Card>
      </Container>

      <Container>
        <br />
<Card className="text-center">
  <Card.Header>Contact Us</Card.Header>
  <Card.Body>
    <Card.Title>Jayasimha Reddy</Card.Title>
    <Card.Text>
      jayasimha1495@gmail.com
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">7299505245</Card.Footer>
</Card>
      </Container>
      </div>
    );
  }
}

export default Contactus;
