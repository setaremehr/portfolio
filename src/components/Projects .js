import React from 'react';
import Card from './Card';
import lyric from '../images/lyric.jpeg';
import notetaker from '../images/notetaker.png';
import weatherapp from '../images/weatherapp.png';
import googlebook from '../images/googlebook.png';
import recipie from '../images/recipie.png';
import readmeG from '../images/readmeG.png';
import employeeT from '../images/employeeT.png';
import employeeS from '../images/employeeS.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Lyric Jam',
                    img: lyric,
                    link: 'https://github.com/specilaist/Lyric-Jam.git',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Note Taker',
                    img: notetaker,
                    link: 'https://github.com/setaremehr/noteTaker.git',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Weather App',
                    img: weatherapp,
                    link: 'https://github.com/setaremehr/weatherApp.git',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Google App',
                    img: googlebook,
                    link: 'https://github.com/setaremehr/GGbook.git',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Recipie',
                    img: recipie,
                    link: 'https://github.com/setaremehr/recipe.git',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Read Me Generator',
                    img: readmeG,
                    link: 'https://github.com/setaremehr/README-Generator.git',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Employee Summary',
                    img: employeeS,
                    link: 'https://github.com/setaremehr/Template-Engine---Employee-Summary.git',
                    selected: false
                },
                {
                    id: 7,
                    title: 'Employee Tracker',
                    img: employeeT,
                    link: 'https://github.com/setaremehr/employeeTracker.git',
                    selected: false
                },
            ]
        }
    }
    handleCard = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }
    eachItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCard(item.id, e))} key={item.id} />
        })
    }
    render() {
        return (
            <Container >
                <Row className="justify-content-around">
                    <Col>
                    <span >{this.eachItems(this.state.items)}</span>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Projects ;