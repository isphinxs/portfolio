import styled from 'styled-components';

export const AboutContainer = styled.div`
    background: #F9F9F9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`;

export const AboutContent = styled.div`
    color: #010606;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
`;

export const AboutH1 = styled.h1`
    color: #010606;
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
    color: #010606;
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
    color: #00A5CF;
`;
