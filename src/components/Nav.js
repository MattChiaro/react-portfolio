
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navStyles from '../css/navStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    return (
        <Container fluid className="header">
            <Navbar expand="lg">
                <Col className="col-12 col-lg-6 d-flex justify-content-center">
                <h1>Matt Chiaro</h1>
                </Col>
                <Col className="col-12 col-lg-6">
                    <Navbar className="basic-navbar-nav paralellogram">
                        <Nav className="me-auto">
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Portfolio</Nav.Link>
                            <Nav.Link href="#link">Resume</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
            </Navbar>
        </Container>
    );
}

export default Navigation