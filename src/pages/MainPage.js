import React from 'react';
import '../../src/App.css';
import '../../src/index.css';
import { FaGithub, FaInstagram } from 'react-icons/fa';

function MainPage(props) {
    return(
        <div className="App">
             <div className="container">
            
        {/* <Jumbotron>
        </Jumbotron> */}
        <h1 className="mt-5"><h3 className="text-white"> SETARE MEHR</h3></h1>
        <p className="text-white">I'm a full-stack web developer</p>

              <h2 className= ''><a href="https://github.com/setaremehr"><FaGithub color="white"/> </a>   
              <a href="https://instagram.com/setare.mmus"><FaInstagram color="white"/> </a> </h2> 

                
        </div>
        </div>
    );

}

export default MainPage;