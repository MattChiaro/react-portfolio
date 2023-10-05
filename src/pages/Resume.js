import {Button, Container} from 'react-bootstrap';
import ChiaroResume from '../ChiaroResume.pdf';

function Resume() {
    return (
        // list of skills and a centered button to download resume
        <Container className="content">
            <div className="row">
                <div className="col-12 col-md-6 d-flex justify-content-center">
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Sequelize</li>
                <li>Bootstrap</li>
                <li>Heroku</li>
                <li>REST APIs</li>
                <li>GraphQL</li>
            </ul>
            </div>
                <div className="col-12 col-md-6 d-flex justify-content-center">
                   <a href={ChiaroResume} download="Matt Chiaro - Resume" target><Button>Download My Resume</Button></a>
                </div>
            </div>
            </Container>
    
    )
}

export default Resume;