import React from 'react';
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroLink } from './HeroElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

const HeroSection = () => {
    return(
        <HeroContainer id="home">
            <HeroContent>
                <HeroH1>Hi, my name is Sam!</HeroH1>
                <HeroP>I'm a full-stack software engineer experienced in JavaScript, Angular, React, and Rails, with a background in science education and program management.</HeroP>
                <HeroLink to="about"
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    ><FontAwesomeIcon icon={faTerminal} size="2x" /></HeroLink>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;