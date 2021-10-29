import React from 'react';

const Project = (props) => {
    return(
        <ul>
            <li><h4>{props.project.title}</h4></li>
            { props.project.frontend ? <li><a href={props.project.frontend}>Front-end</a></li> : null }
            { props.project.backend ? <li><a href={props.project.backend}>Back-end</a></li> : null }
            { props.project.demo ? <li><a href={props.project.demo}>Demo</a></li> : null }
            { props.project.live ? <li><a href={props.project.live}>Live App</a></li> : null } 
            <li>{props.project.description}</li>
        </ul>
    )
}

export default Project;