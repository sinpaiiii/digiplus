import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Offerletter from "./components/Offerletter";
import Payment from "./components/Payment";
import Certificate from "./components/Certificate";
import Jobs from "./components/Jobs";

const App = () => {
  return (
    <>
      <div classname="App">
        <>
          <Navbar class="navbar-custom" expand="lg">
            <Container class="nav-custom">
              <Navbar.Brand class="navbar-brand" as={Link} to="/">
                DIGIPLUS
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" class="hov">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/jobs" class="hov">
                    My Jobs
                  </Nav.Link>
                  <Nav.Link as={Link} to="/payment" class="hov">
                    My Payment
                  </Nav.Link>
                  <Nav.Link as={Link} to="/offerletter" class="nav-custom">
                    My Offerletter
                  </Nav.Link>
                  <Nav.Link as={Link} to="/certificate" class="hov">
                    My Certificate
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/offerletter" element={<Offerletter />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </>
  );
};

export default App;
