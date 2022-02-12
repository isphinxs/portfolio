import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #101522;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 20px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const NameLogo = styled(Link)`
    color: #FFF;
    font-family: 'Birthstone Bounce', cursive;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin: 16px;
    font-weight: bold;
`;

export const WebsiteRights = styled.small`
    color: #FFF;
    margin-bottom: 16px;
    font-size: 1rem;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
`;

export const SocialIconLink = styled.a`
    color: ${({lightText}) => (lightText ? "#FFF" : "#010606")};
    font-size: 24px;
`;