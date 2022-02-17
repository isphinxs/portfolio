import styled from 'styled-components';

export const AboutContainer = styled.div`
    background: var(--alternate-background);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
`;

export const AboutContent = styled.div`
    color: var(--dark-text);
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px; 
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AboutH1 = styled.h1`
    color: var(--dark-text);
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;
    
export const AboutP = styled.p`
    margin-top: 24px;
    color: var(--dark-text);
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

export const AboutA = styled.a`
    color: var(--alternate-accent-text);
`;
