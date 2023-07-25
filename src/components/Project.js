import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import SlideIn from '../utils/SlideIn';

import {Github, BrowserChrome} from 'react-bootstrap-icons';

import projects from '../utils/projects.json';

function Projects() {
  return (
    <SlideIn>
    <Row xs={1} md={3} className="g-4">
      {projects.map(({title, image, desc, repoLink, liveLink}) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {desc}
              </Card.Text>
                <Card.Link href={repoLink} target="blank"><Github size={36}/></Card.Link>
                <Card.Link href={liveLink} target="blank"><BrowserChrome size={36}/></Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row></SlideIn>
  );
}

export default Projects;