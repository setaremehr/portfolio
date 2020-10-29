import React from 'react';
// import {Jumbotron} from 'react-bootstrap';
import '../../src/App.css';
import '../../src/index.css';
import Button from 'react-bootstrap/Button'

function MainPage(props) {

    return(
        <div className="App">
             <div className="container">
        {/* <Jumbotron>
        </Jumbotron> */}
        <h1><h3 className="text-white "> SETARE MEHR</h3></h1>
        <p className="text-white">I'm a full-stack web developer</p>
        {/* <Jumbotron>
        </Jumbotron> */}
        <Button className="buttonsMe" variant="secondary">Reach Out To Me</Button>{' '}
        </div>
        </div>
    );

}

export default MainPage;