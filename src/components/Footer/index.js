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
                        <WebsiteRights>copyright {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="//www.github.com" target="_blank" aria-label="GitHub">
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