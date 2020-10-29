import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Button } from 'react-bootstrap';
import {Row} from 'react-bootstrap';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            emailSent: null,
        }
    }
    render() {

        return (
            <Container>
                <Row>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="text-white mt-5" htmlFor="email">Email address</Form.Label>
                        <Form.Control type="email" name="email" id="email" value={this.state.email} onChange={this.handleForm}  placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label htmlFor="full-name" className="text-white">Full Name</Form.Label>
                        <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleForm} placeholder="Enter your full name" />
                        </Form.Group>

                        <Form.Group>
                        <Form.Label htmlFor="message" className="text-white">Message</Form.Label>
                        <Form.Control id="message" name="message" as="textarea" rows="5" value={this.state.message} onChange={this.handleForm}/>
                        </Form.Group>

                        <Button className="d-inline-block" type="submit" variant="secondary" >
                            SEND
                        </Button>
                </Form>
                </Row>
     </Container>
        
        );
    }

}

export default Contact;