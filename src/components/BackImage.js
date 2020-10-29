import React from 'react';
import Media from 'react-bootstrap/Media'
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image'

function BackImage (props) {

    return(
        <Media>
  <img
    width={350}
    height={300}
    className="ml-5 mt-3 mr-3 "
    src="https://thumbs.dreamstime.com/b/people-communicating-colorful-silhouettes-holding-speech-balloons-communication-concept-white-background-40256743.jpg"
    alt="Generic placeholder"
  />
  <Media.Body className="justify-content-center py-5 ml-5 mt-5">
    <h5 >Media Heading</h5>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. 
    </p>
  </Media.Body>
</Media>
    );

}


export default BackImage;