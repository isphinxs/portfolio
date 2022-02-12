import React from 'react';
import { AboutContainer, AboutContent, AboutH1, AboutP, AboutA } from './AboutElements';
import { SocialIconLink, SocialIcons } from '../Footer/FooterElements';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
    return(
        <AboutContainer id="about">
            <AboutContent>
                <AboutH1>About</AboutH1>
                <AboutP>
                    Throughout my career, I have worked at the intersection of science education, outreach, and program management to make positive change in the world. 
                </AboutP>              
                <AboutP>
                    In grad school I was exposed to programming through ArcGIS and have been interested in coding ever since.  I went on to study software engineering at <AboutA href="https://www.freecodecamp.org">FreeCodeCamp</AboutA> and the <AboutA href="https://flatironschool.com/">Flatiron School</AboutA>.
                </AboutP>
                <AboutP>
                    With experience in environmental studies, publishing, and software engineering, I enjoy shepherding both technical projects and more complex, mission-driven ventures—and developing processes to make those programs more efficient and easier to manage.
                </AboutP>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <SocialIcons>
                    <SocialIconLink 
                        href="https://www.linkedin.com/in/sam-ostrowski/" 
                        aria-label="LinkedIn" 
                        lightText={false}>
                        <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink 
                        href="https://github.com/isphinxs" 
                        aria-label="GitHub"
                        lightText={false}>
                        <FaGithub />
                    </SocialIconLink>
                </SocialIcons>
            </AboutContent>
        </AboutContainer>
    )
}

export default About;