import React from 'react';
import BackImage  from '../components/BackImage';
import { Container } from 'react-bootstrap';
import {Row }from 'react-bootstrap';
import {Col} from 'react-bootstrap';

function About(props) {

    return (
<div>
    <Container> 
<BackImage/>
<Row>
    <Col xs={6}>
    <p className="text-white pline">  Designer with a passion for designing & Developer graduate ❣</p>
    </Col>

</Row>
</Container>

</div>
    );
}

export default About;