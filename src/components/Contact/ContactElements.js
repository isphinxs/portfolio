import styled from 'styled-components';

export const ContactWrapper = styled.div`
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 80px) {
        height: 1300px;
    }
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    padding: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600px;
    color: white;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Form = styled.form`


`;