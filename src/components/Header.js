import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideIn from '../utils/SlideIn';
import Navigation from './Nav';
import nameSVG from '../name.svg';
import '../css/headerStyles.css';

function Header() {
    return (
        <Container fluid className="header">
            <Navbar expand="lg">
                <Col className="col-12 col-lg-4 d-flex justify-content-center">
                    <img src={nameSVG}/>
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