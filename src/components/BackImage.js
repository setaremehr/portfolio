import React from 'react';
import Media from 'react-bootstrap/Media'
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image'

function BackImage (props) {

    return(
        <Media className="justify-content-center mt-3"> 
  <img
    width={200}
    height={400}
    className="ml-5  mr-3 "
    src="https://i.pinimg.com/564x/c4/9a/6b/c49a6b67559aad52f3208c5a0562d38b.jpg"
    alt="myPic"
  />
  <Media.Body className="justify-content-center py-5 ml-5 mt-5">
    <h5 className="text-muted">Hi! I'm Setare MainPage.js</h5>
    <p className="text-white pline">
    My name is Setare Mehr I'm a 31 year old Full Stack Web Developer based in California ☀️
    I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.
    </p>
  </Media.Body>
</Media>
    );

}


export default BackImage;