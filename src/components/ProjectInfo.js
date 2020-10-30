import React from 'react';
import { useSpring, animated } from 'react-spring';

function ProjectInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="proCard-info" style={style}>
            <p className="proCard-title text-white align-middle">{props.title}</p>
           <p className="proCard-title align-middle "> <a href={props.link} target="_blank" rel="noopener noreferrer">View</a></p>
        </animated.div>
    );

}

export default ProjectInfo;