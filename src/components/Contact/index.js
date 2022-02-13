import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faEnvelopeOpenText, faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { ContactWrapper, ContactH1, ContactForm, ContactLabel, ContactInput, ContactTextarea, ContactDiv, ErrorDiv, ContactSubmit } from './ContactElements';
import { SocialIconLink, SocialIcons } from '../Footer/FooterElements';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const error = document.getElementsByClassName("error");
    const successIcon = document.getElementsByClassName("success-icon");
    const failureIcon = document.getElementsByClassName("failure-icon");

    const handleChange = event => {
        if (event.target.name === "name") {
            setName(event.target.value);
        };
        if (event.target.name === "email") {
            setEmail(event.target.value);
        };
        if (event.target.name === "content") {
            setContent(event.target.value);
        };
    }

    const handleSubmit = event => {
        event.preventDefault();
        validate(name, 0, "Name cannot be blank");
        validate(email, 1, "Email cannot be blank");
        validate(content, 2, "Content cannot be blank");

        const templateParams = {
            from_name: name,
            reply_to: email,
            message: content
        }

        const resetForm = () => {
            setName("");
            setEmail("");
            setContent("");
            successIcon[0].style.opacity = 1;
            successIcon[1].style.opacity = 1;
            successIcon[2].style.opacity = 1;
        }

        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_USER_ID)
            .then(result => {
                console.log(result.text);
                resetForm();
            }, error => {
                console.log(error.text);
            });
    }

    const validate = (value, serial, message) => {
        if (value.trim() === "") {
            error[serial].innerHTML = message;
            successIcon[serial].style.opacity = 0;
            failureIcon[serial].style.opacity = 1;
        } else {
            error[serial].innerhtml = "";
            successIcon[serial].style.opacity = 1;
            failureIcon[serial].style.opacity = 0;
        }
    }

    return(
        <ContactWrapper>
            <ContactH1>Contact Sam</ContactH1>
            <ContactForm className="form" onSubmit={handleSubmit}>
                <ContactDiv>
                    <ContactLabel htmlFor="name">Name</ContactLabel>
                    <FontAwesomeIcon className="icon" icon={faUser} size="1x" />
                    <ContactInput type="text" name="name" id="name" onChange={handleChange} placeholder="Name" value={name} />
                    <FontAwesomeIcon className="icon failure-icon" icon={faExclamationCircle} size="1x" />
                    <FontAwesomeIcon className="icon success-icon" icon={faCheckCircle} size="1x" />
                    <ErrorDiv className="error"></ErrorDiv>
                </ContactDiv>
                <ContactDiv>
                    <ContactLabel htmlFor="email">Email</ContactLabel>
                    <FontAwesomeIcon className="icon" icon={faEnvelope} size="1x" />
                    <ContactInput type="text" name="email" id="email" onChange={handleChange} placeholder="Email" value={email} />
                    <FontAwesomeIcon className="icon failure-icon" icon={faExclamationCircle} size="1x" />
                    <FontAwesomeIcon className="icon success-icon" icon={faCheckCircle} size="1x" />
                    <ErrorDiv className="error"></ErrorDiv>
                </ContactDiv>
                <ContactDiv>
                    <ContactLabel htmlFor="content">Content</ContactLabel>
                    <FontAwesomeIcon className="icon" icon={faEnvelopeOpenText} size="1x" />
                    <ContactTextarea name="content" id="content" onChange={handleChange} placeholder="Hi! I'd love to connect." value={content} />
                    <FontAwesomeIcon className="icon failure-icon" icon={faExclamationCircle} size="1x" />
                    <FontAwesomeIcon className="icon success-icon" icon={faCheckCircle} size="1x" />
                    <ErrorDiv className="error"></ErrorDiv>
                </ContactDiv>
                <ContactSubmit className="contact-button" type="submit" value="Submit" />
                <div className="g-recaptcha" data-sitekey="process.env.REACT_APP_SITE_ID"></div>
            </ContactForm>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <SocialIcons>
                <SocialIconLink 
                    href="https://www.linkedin.com/in/sam-ostrowski/" 
                    aria-label="LinkedIn" 
                    lightText={true}>
                    <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink 
                    href="https://github.com/isphinxs" 
                    aria-label="GitHub"
                    lightText={true}>
                    <FaGithub />
                </SocialIconLink>
            </SocialIcons>
        </ContactWrapper>
    )
}

export default Contact;