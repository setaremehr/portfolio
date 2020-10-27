import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Setare Mehr',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: '',
        subTitle: '',
        text: ''
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Get In Touch'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Setare Mehr</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
<Footer />
          <Route path="/" exact render={() => <MainPage 
          title={this.state.home.title} 
          subTitle={this.state.home.subTitle} 
          text={this.state.home.text} />} />
          <Route path="/about" render={() => <About title={this.state.about.title} />} />
          <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />
          
       

        </Container>
      </Router>
    );
  }
}

export default App;
