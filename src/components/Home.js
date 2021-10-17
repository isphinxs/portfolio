import React from 'react';
import Pdf from '../documents/Resume.pdf';

function Home() {
    return(
        <div>
            <a href={Pdf} target="_blank">Download Sam's Resume</a>
        </div>
    )
}

export default Home;