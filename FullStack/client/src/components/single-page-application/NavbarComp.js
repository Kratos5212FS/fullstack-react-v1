import {Navbar,Nav,Container} from 'react-bootstrap';
import {FaHome} from 'react-icons/fa';
import {FcAbout} from 'react-icons/fc';
import {MdLogin} from 'react-icons/md';
import {MdAppRegistration} from 'react-icons/md';
import {Link} from 'react-router-dom';

export function  NavbarComp(params) {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link}  to="/home">
        <FaHome></FaHome>
            Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
             <FcAbout></FcAbout>
            About
            </Nav.Link>
        <Nav.Link as={Link} to="/simple-registration">
            <MdAppRegistration></MdAppRegistration>
            Simple Registration</Nav.Link>
        <Nav.Link as={Link} to="/business-registration">Business Registration</Nav.Link>
        <Nav.Link as={Link} to="/my-cards">My Cards</Nav.Link>
        <Nav.Link as={Link} to="/sign-in">
          <MdLogin></MdLogin>
            Sign In</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>;
}

export default NavbarComp;