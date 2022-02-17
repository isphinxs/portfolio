import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: var(--main-background);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
`;

export const HeroContent = styled.div`
    color: var(--light-text);
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px; 
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: var(--light-text);
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;
    
export const HeroP = styled.p`
    margin-top: 24px;
    color: var(--light-text);
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }    
`;

export const HeroA = styled.a`
    color: var(--light-text);
`;
