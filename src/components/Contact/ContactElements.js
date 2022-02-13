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

export const ContactH1 = styled.h1`
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
    color: #FFF;
    font-size: 18px;
`;

export const ContactInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    padding: 0 30px;
    font-size: 18px;

    &:focus {
        border: 2px solid #00A5CF;
    }
    `;
    
export const ContactTextarea = styled.textarea`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    padding: 5px 30px;
    font-size: 18px;
 
    &:focus {
        border: 2px solid #00A5CF;
    }
`;

export const ErrorDiv = styled.div`
    font-size: 18px;
    margin-top: 10px;
`;

export const ContactSubmit = styled.input`
    background-color: #00A5CF;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 50px;
    padding: 14px 48px;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;