import React from "react";
import { Navbar, Container, Card, Button } from "react-bootstrap";
import myImage from '../assets/workplace.jpg';
import "../CSS/BootstrapExample.css";
import styles from "../App.module.css";
function BootstrapExample() {

  //InLine styles
  const style = {
    color: "red",
    padding: "15px",
    borderRadius: "5px",
    fontSize: "22px",
  };

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">My React App</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-4 d-flex justify-content-center">
        <Card style={{ width: "10rem" }}>
          <Card.Img variant="top" src={myImage} width={50} height={100}/>
          <Card.Body className={styles.box}>
            <Card.Title style={style}>React Bootstrap Card</Card.Title>
            <Card.Text className="box">
              This is a simple card component using React Bootstrap.
            </Card.Text>
            <Button variant="primary">Click Me</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "10rem" }}>
          <Card.Img variant="top" src={myImage} width={50} height={100}/>
          <Card.Body className={styles.box}>
            <Card.Title style={style}>React Bootstrap Card</Card.Title>
            <Card.Text className="box">
              This is a simple card component using React Bootstrap.
            </Card.Text>
            <Button variant="secondary">Click Me</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "10rem" }}>
          <Card.Img variant="top" src={myImage} width={50} height={100}/>
          <Card.Body className={styles.box}>
            <Card.Title style={style}>React Bootstrap Card</Card.Title>
            <Card.Text className="box">
              This is a simple card component using React Bootstrap.
            </Card.Text>
            <Button variant="light">Click Me</Button>
          </Card.Body>
        </Card>
      </Container>
      <h2 style={style}>InLine Style</h2>
      <h3 style={style}>Inline Style for h3</h3>
      <h4 className="box">External CSS</h4>
      <h5 id={styles.box}>CSS Module id</h5>
      <h5 className={styles.box1}>CSS Module class</h5>
    </div>
  );
}

export default BootstrapExample;
