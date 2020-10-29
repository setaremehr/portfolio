import React from 'react';
import ProjectInfo from './ProjectInfo';
function Card(props){

    return(
     <div className="d-inline-block">
         <img className='proCard-image' src={props.item.img} alt={props.item.img} />
         { props.item.selected && <ProjectInfo title={props.item.title} link={props.item.link} /> }
     </div>
    );
}

export default Card;