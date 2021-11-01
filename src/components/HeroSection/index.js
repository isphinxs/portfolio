import React from 'react';
import { HeroContainer, HeroContent, HeroH1, HeroP } from './HeroElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
    return(
        <HeroContainer id="home">
            <HeroContent>
                <HeroH1>Hi, my name is Sam!</HeroH1>
                <HeroP>I'm a full-stack software engineer experienced in JavaScript, React, and Rails, with a background in science education and program management.</HeroP>
                <FontAwesomeIcon icon={faTerminal} size="2x" />
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;