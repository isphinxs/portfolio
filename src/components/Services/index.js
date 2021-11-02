import React from 'react';
import Icon1 from '../../images/undraw_contact.svg';
import Icon2 from '../../images/undraw_contact.svg';
import Icon3 from '../../images/undraw_contact.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return(
        <ServicesContainer id="services">
            <ServicesH1>Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Goodtheater</ServicesH2>
                    <ServicesP>Twas brillig and the slithy toves</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Schedule</ServicesH2>
                    <ServicesP>Twas brillig and the slithy toves</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>PubAdvance</ServicesH2>
                    <ServicesP>Twas brillig and the slithy toves</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;