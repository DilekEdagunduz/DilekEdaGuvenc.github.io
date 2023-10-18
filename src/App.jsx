import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Anasayfa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Hakkımda</Nav.Link>
            <Nav.Link href="#features">Tavsiyler</Nav.Link>
            <Nav.Link href="#features">İletişim</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
