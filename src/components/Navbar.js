import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Navbar as NavbarBootstrap } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavbarBootstrap bg="light" expand="lg">
      <Container fluid>
        <NavbarBootstrap.Brand href="#">ShopIt</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="navbarScroll" />
        <NavbarBootstrap.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}

export default Navbar;
