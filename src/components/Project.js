
import { Card, Col, Row, Container } from 'react-bootstrap';

import SlideIn from '../utils/SlideIn';

import { Github, BrowserChrome } from 'react-bootstrap-icons';

import projects from '../utils/projects.json';

function Projects() {
  return (

    <SlideIn>
      <Container className='projects'>
        <Row xs={1} md={3} className="g-4">
          {projects.map(({ title, image, desc, repoLink, liveLink }) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={require(`../images/${image }.png`)} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    {desc}
                  </Card.Text>
                  <Card.Link href={repoLink} target="blank"><Github size={36} /></Card.Link>
                  <Card.Link href={liveLink} target="blank"><BrowserChrome size={36} /></Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </SlideIn>
  );
}

export default Projects;