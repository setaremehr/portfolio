import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './App.css';


// import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/portfolio';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Setare Mehr',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Portfolio', path: '/portfolio' }
      ],
      home: {
        image: '<Image/>'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Get In Touch'
      },
      portfolio: {
        title: 'Here what I have done!'
      }
    }
  }

  render() {
    return (

      <Router>
            
              <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                
              </Nav>
              

          <Route path="/" exact render={() => <MainPage
            image={this.state.home.image} />} />
          <Route path="/about" render={() => <About title={this.state.about.title} />} />
          <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />
          <Route path="/portfolio" render={() => <Portfolio title={this.state.portfolio.title} />} />

          {/* <Footer /> */}
      </Router>

    );
  }
}

export default App;
