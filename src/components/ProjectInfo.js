import React from 'react';
import { useSpring, animated } from 'react-spring';

function ProjectInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="proCard-info" style={style}>
            <p className="proCard-title">{props.title}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    );

}

export default ProjectInfo;