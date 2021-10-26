import React from 'react';
import Pdf from '../documents/Resume.pdf';
import resume from '../undraw_resume.svg';

function Home() {
    return(
        <div>
            <p>I'm a full-stack software engineer experienced in JavaScript, React, and Rails, with a background in science education and program management.</p>
            <br />
            <img alt="" className="illustration" src={resume} />
            <a href={Pdf} target="_blank" rel="noreferrer">Download Sam's Resume</a>
        </div>
    )
}

export default Home;