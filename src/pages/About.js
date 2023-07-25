import {Container} from 'react-bootstrap';
import Matt from '../images/matt.jpg';


function About() {
    return (
        <Container className="d-flex justify-content-center align-items-center content">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={Matt} alt="Matt Chiaro" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 text-center d-flex align-items-center">
                    <p>
                        Hi! 
                        
                        <br></br>
                        
                        I'm Matt, and I have a passion for creating fast, responsive, and attractive applications. Thanks for checking out my portfolio. If you have any questions, don't hesitate to reach out -- even just to say hi!
                    
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default About