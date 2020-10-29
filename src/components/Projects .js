import React from 'react';
import Card from './Card';
import lyric from '../images/lyric.jpeg';
import notetaker from '../images/notetaker.png';
import weatherapp from '../images/weatherapp.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


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
                    link: 'https://github.com/garrettlove8/evverest',
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
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.eachItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}
export default Projects ;