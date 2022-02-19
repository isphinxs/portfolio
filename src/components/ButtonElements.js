import styled from 'styled-components';

export const Button = styled.a`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'var(--accent-text)' : 'var(--alternate-accent-text)')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? 'var(--light-text)' : 'var(--light-text)')}; // light text in both cases
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`