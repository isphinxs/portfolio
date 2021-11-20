import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to="/about">About</FooterLink>
                            <FooterLink to="/about">About</FooterLink>
                            <FooterLink to="/about">About</FooterLink>
                            <FooterLink to="/about">About</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to="/about">About</FooterLink>
                            <FooterLink to="/about">About</FooterLink>
                            <FooterLink to="/about">About</FooterLink>
                            <FooterLink to="/about">About</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to="/about">About</FooterLink>
                            <FooterLink to="/about">About</FooterLink>
                            <FooterLink to="/about">About</FooterLink>
                            <FooterLink to="/about">About</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to="/about">About</FooterLink>
                            <FooterLink to="/about">About</FooterLink>
                            <FooterLink to="/about">About</FooterLink>
                            <FooterLink to="/about">About</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Sam</SocialLogo>
                        <WebsiteRights>&copy; {new Date().getFullYear()} Samantha Ostrowski</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/sam-ostrowski/" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/isphinxs" aria-label="GitHub">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;