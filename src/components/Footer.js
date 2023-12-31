import { Navbar, Nav } from 'react-bootstrap';
import {Github, Envelope, Linkedin} from 'react-bootstrap-icons';

function Footer() {
return ( 
    
    <Navbar className="basic-navbar-nav paralellogram footer">
    <Nav className="me-auto">
        <Nav.Link href="https://github.com/mattchiaro" target="blank"><Github size={24}/></Nav.Link>
        <Nav.Link href="mailto:Matt@Mchmedia.co"><Envelope size={24}/></Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/matt-chiaro-08323211b" target="blank"><Linkedin size={24}/></Nav.Link>
    </Nav>
</Navbar>

)
}
export default Footer