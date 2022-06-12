import styled from 'styled-components';

export const BlogLink = styled.a`
    color: var(--dark-text);

    &:visited {
        color: var(--dark-text);
    }
`;

export const BlogContainer = styled.div`
    min-height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--alternate-background);

    @media screen and (max-width: 1000px) {
        height: 1300px;
    }

    @media screen and (max-width: 768px) {
        height: 2350px;
    }
`;

export const BlogWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const BlogCard = styled.div`
    background: var(--alternate-background);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const BlogIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    overflow: hidden;
`;

export const BlogH1 = styled.h1`
    font-size: 2.5rem;
    color: var(--dark-text);
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const BlogH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const BlogP = styled.p`
    font-size: 1rem;
    text-align: center;
`;