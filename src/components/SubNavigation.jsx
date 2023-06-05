import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function SubNavigation() {
  return (
    <Navbar bg="light">
      <Container>
        <Nav style={{ maxHeight: "100px" }} navbarScroll>
          <Link className="p-5" to="/women">
            Women
          </Link>
          <Link className="p-5" to="/men">
            Men
          </Link>
          <Link className="p-5" to="/children">
            Children
          </Link>
          <Link className="p-5" to="/sale">
            Sale
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SubNavigation;
