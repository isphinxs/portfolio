import React from 'react';
import Pdf from '../documents/Resume.pdf';
import resume from '../undraw_resume.svg';

function Home() {
    return(
        <div className="container">
            <div className="content">
                <p>I'm a full-stack software engineer experienced in JavaScript, React, and Rails, with a background in science education and program management.</p>
                <a href={Pdf} target="_blank" rel="noreferrer">Download Sam's Resume</a>
            </div>
            <img alt="" className="illustration" src={resume} />
        </div>
    )
}

export default Home;