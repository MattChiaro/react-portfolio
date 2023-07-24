import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    return (
        <Navbar className="basic-navbar-nav paralellogram">
            <Nav className="me-auto">
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Portfolio</Nav.Link>
                <Nav.Link href="#link">Resume</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation