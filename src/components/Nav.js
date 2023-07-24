//React bootstrap
import {Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

// CSS
import '../css/nav.css';

function Navigation() {
    return (
        <Navbar className="basic-navbar-nav paralellogram">
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/about"  >About</Nav.Link>
                <Nav.Link as={NavLink} to="/portfolio" >Portfolio</Nav.Link>
                <Nav.Link as={NavLink} to="/resume" >Resume</Nav.Link>
                <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation