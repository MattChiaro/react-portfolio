import { Button, Form, Container } from 'react-bootstrap';
import { useForm, ValidationError, FormspreeProvider, Field, FormspreeForm } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("mbjvvqyy");

    if (state.succeeded) {
        return (
            <Container className="d-flex justify-content-center text-center mt-5">
            <div className="col-8">
        <p className='display-5'>Thanks! We will talk soon!</p>
        </div>
        </Container>
        )
    }

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <div className="col-8">
        <form onSubmit={handleSubmit} className="m-5">
            <div className="mb-3">
                <label className="form-label">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-control"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>


            <div className="mb-3">
                <label htmlFor="message" className="form-label">
                    What can I do for you?
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="form-control"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>

            <button type="submit" className="btn btn-secondary" disabled={state.submitting}>
                Submit
            </button>
        </form>
        </div>
        </Container>
    );
}


export default Contact;