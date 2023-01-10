import { FaLinkedin, FaGithub } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

import { ContactWrapper, ContactH1, ContactForm, ContactLabel, ContactInput, ContactTextarea, ContactDiv, ErrorDiv, ContactSubmit } from './ContactElements';
import { SocialIconLink, SocialIcons } from '../Footer/FooterElements';

function Contact() {
    const captchaRef = useRef(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        content: ""
    });
    const error = document.getElementsByClassName("error");

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
        // Obtain and reset reCaptcha value
        const captchaValue = captchaRef.current.getValue();
        captchaRef.current.reset();

        const templateParams = {
            "from_name": name,
            "reply_to": email,
            "message": content,
            "g-recaptcha-response": captchaValue
        }

        const resetForm = () => {
            setName("");
            setEmail("");
            setContent("");
            setFormErrors({
                name: "",
                email: "",
                content: ""
            });
            captchaRef.current.reset();
        }
        
        const validate = () => {
            let hasErrors = false;

            if (name.trim() === "") {
                hasErrors = true;
                setFormErrors(formErrors => ({
                    ...formErrors, 
                    name: "*Name cannot be blank"
                }));
            } else {
                setFormErrors(formErrors => ({
                    ...formErrors, 
                    name: ""
                }));
            }
            
            if (email.trim() === "") {
                hasErrors = true;
                setFormErrors(formErrors => ({
                    ...formErrors, 
                    email: "*Email cannot be blank"
                }));
            } else {
                setFormErrors(formErrors => ({
                    ...formErrors, 
                    email: ""
                }));
            }
            
            if (content.trim() === "") {
                hasErrors = true;
                setFormErrors(formErrors => ({
                    ...formErrors, 
                    content: "*Content cannot be blank"
                }));
            } else {
                setFormErrors(formErrors => ({
                    ...formErrors, 
                    content: ""
                }));
            }
            
            return hasErrors;
        }

        const sendEmail = () => {
            const hasErrors = validate();

            if (!hasErrors) {
                emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_USER_ID)
                    .then(result => {
                        alert("Message sent, thank you!");
                        console.log(result.text);
                        resetForm();
                    }, error => {
                        alert("I'm sorry, there was an error. Please try again!");
                        console.log(error.text);
                    });
            }
        }

        event.preventDefault();
        sendEmail();
    }

    return(
        <ContactWrapper id="contact">
            <ContactH1>Contact Sam</ContactH1>
            <ContactForm className="form" onSubmit={handleSubmit}>
                <ContactDiv>
                    <ContactLabel htmlFor="name">Name</ContactLabel>
                    <ErrorDiv className="error">{formErrors.name}</ErrorDiv>
                    <ContactInput type="text" name="name" id="name" onChange={handleChange} placeholder="Name" value={name} />
                </ContactDiv>
                <ContactDiv>
                    <ContactLabel htmlFor="email">Email</ContactLabel>
                    <ErrorDiv className="error">{formErrors.email}</ErrorDiv>
                    <ContactInput type="text" name="email" id="email" onChange={handleChange} placeholder="Email" value={email} />
                </ContactDiv>
                <ContactDiv>
                    <ContactLabel htmlFor="content">Content</ContactLabel>
                    <ErrorDiv className="error">{formErrors.content}</ErrorDiv>
                    <ContactTextarea name="content" id="content" onChange={handleChange} placeholder="Hi! I'd love to connect." value={content} />
                </ContactDiv>
                <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} ref={captchaRef}/>
                <ContactSubmit className="contact-button" type="submit" value="Submit" />
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