
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navStyles from '../css/navStyles.css'

function Navigation() {
    return (
        <Container fluid className="header">
            <Navbar expand="lg" className="">
                <Col>
                </Col>
                <Col className="">
                    <Navbar.Collapse className="basic-navbar-nav paralellogram">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Portfolio</Nav.Link>
                            <Nav.Link href="#link">Resume</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Col>
            </Navbar>
        </Container>
    );
}

export default Navigation