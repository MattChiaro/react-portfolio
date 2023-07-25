//react-bootstrap
import { Col, Container, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

// Components
import SlideIn from '../utils/SlideIn';
import Navigation from './Nav';
import nameSVG from '../name.svg';

// CSS
import '../css/header.css';

function Header() {
    return (
        <Container fluid className="header">
            <Navbar expand="lg">
                <Col className="col-12 col-lg-4 d-flex justify-content-center">
                    <Link to="/react-portfolio"><img src={nameSVG} alt="Matt Chiaro"/></Link>
                    
                </Col>
                <Col>
                </Col>
                <Col className="col-12 col-lg-5">
                    <SlideIn>
                        <Navigation />
                    </SlideIn>
                </Col>

            </Navbar>
        </Container>
    )
}

export default Header;