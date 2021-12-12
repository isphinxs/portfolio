import React from 'react';
import { Button } from '../ButtonElements';
import { ProjectContainer, ProjectWrapper, ProjectRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './ProjectElements';

const Projects = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, btnUrl}) => {
    return(
        <>
            <ProjectContainer lightBg={lightBg} id={id}>
                <ProjectWrapper>
                    <ProjectRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button href={btnUrl}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact={true}
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </ProjectRow>
                </ProjectWrapper>
            </ProjectContainer>
        </>
    )

}

export default Projects;