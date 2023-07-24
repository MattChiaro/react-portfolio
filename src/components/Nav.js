//React bootstrap
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

// CSS
import '../css/nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    return (
        <Navbar className="basic-navbar-nav paralellogram">
            <Nav className="me-auto">
                <Nav.Link><Link className="unskew nav-link" to="/about">About</Link></Nav.Link>
                <Nav.Link><Link className="unskew nav-link" to="/portfolio">Portfolio</Link></Nav.Link>
                <Nav.Link><Link className="unskew nav-link" to="/resume">Resume</Link></Nav.Link>
                <Nav.Link><Link className="unskew nav-link" to="/contact">Contact</Link></Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation