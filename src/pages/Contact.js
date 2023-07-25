import { Button, Form, Container } from 'react-bootstrap';

function Contact() {
    return (
        <Container>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFeedback">
                    <Form.Label>What can I do for you?</Form.Label>
                    <Form.Control as="textarea" rows={3} />

                </Form.Group>
                <Button className="btn" variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Contact;