//react-bootstrap
import {Col, Container, Navbar} from 'react-bootstrap';

// Components
import SlideIn from '../utils/SlideIn';
import Navigation from './Nav';
import nameSVG from '../name.svg';

// CSS
import '../css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <Container fluid className="header">
            <Navbar expand="lg">
                <Col className="col-12 col-lg-4 d-flex justify-content-center">
                    <img src={nameSVG} alt="Matt Chiaro"/>
                </Col>
                <Col>
                </Col>
                <Col className="col-12 col-lg-5">
                    <SlideIn>
                    <Navigation />
                </SlideIn></Col>

            </Navbar>
        </Container>
    )
}

export default Header;