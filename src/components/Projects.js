import React from 'react';
import Project from './Project';

const projects = [
    {
        title: "Goodtheater",
        frontend: "https://github.com/isphinxs/theater-client",
        backend: "https://github.com/isphinxs/theater-api",
        demo: "https://youtu.be/sqfp5cil7Gs",
        description: "Theater cataloging website allowing enthusiasts to find and save their favorite musicals and plays"
    },
    {
        title: "Scheduling Calendar",
        frontend: "https://github.com/isphinxs/schedule-master-client",
        backend: "https://github.com/isphinxs/schedule-master-api",
        live: "https://isphinxs.github.io/schedule-master-client",
        description: "Single-page application (SPA) for busy professionals to quickly take notes and block out days on the calendar"

    },
    {
        title: "Financial Resource Viewer",
        code: "https://github.com/isphinxs/resource-viewer",
        demo: "https://youtu.be/kOxTEO_xcBE",
        live: "https://evening-lowlands-43805.herokuapp.com/",
        description: "Content management system for authors to post, view, and rate grants, fellowships, and other sources of funding"
    }, 
    {
        title: "PubAdvance",
        code: "https://github.com/isphinxs/pub_advance",
        demo: "https://youtu.be/VIwfeF5FMSA",
        live: "https://warm-gorge-84054.herokuapp.com",
        description: "Publication advance tracking system allowing authors to self-report compensation, aimed to help decrease pay disparity"
    }
]

function Projects() {
    return(
        <div>
            <h3>Projects</h3>
            {projects.map(project => <Project project={project} />)}
        </div>
    );
}

export default Projects;