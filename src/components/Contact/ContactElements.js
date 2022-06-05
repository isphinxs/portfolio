import styled from 'styled-components';

export const ContactWrapper = styled.div`
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--main-background);

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ContactH1 = styled.h1`
    margin-bottom: 24px;
    padding: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600px;
    color: var(--light-text);
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
    `;
    
export const ContactForm = styled.form`
    width: 55%;
    display: flex;
    flex-direction: column;    
`;

export const ContactDiv = styled.div`
    margin-bottom: 15px;
`;

export const ContactLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    color: var(--light-text);
    font-size: 18px;
`;

export const ContactInput = styled.input`
    width: 100%;
    height: 40px;
    border: 2px solid black;
    border-radius: 4px;
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: 18px;
    
    &:focus {
        border: 2px solid var(--secondary-color);
    }
    `;
    
    export const ContactTextarea = styled.textarea`
    width: 100%;
    height: 80px;
    border: 2px solid black;
    border-radius: 4px;
    padding: 5px 10px;
    margin-bottom: 15px;
    font-size: 18px;
 
    &:focus {
        border: 2px solid var(--secondary-color);
    }
`;

export const ErrorDiv = styled.div`
    font-size: 18px;
    margin: 10px 0;
    color: yellow;
`;

export const ContactSubmit = styled.input`
    background-color: var(--secondary-color);
    color: var(--light-text);
    font-size: 20px;
    border: none;
    border-radius: 50px;
    padding: 14px 48px;
    margin: 20px 0;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;