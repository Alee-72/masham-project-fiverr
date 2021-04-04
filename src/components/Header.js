import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <div>
      <Navbar style={{width:"101.2%"}} collapseOnSelect expand="lg" bg='light'>
        <Navbar.Brand href="#home">PowerOdd</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link active href="#features">PostJobs</Nav.Link>
            <Nav.Link href="#pricing">BrowseJobs</Nav.Link>
            <Nav.Link href="#pricing">Categories</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};