import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faEnvelopeOpenText, faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

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

    const handleClick = event => {
        event.preventDefault();
        validate(name, 0, "Name cannot be blank");
        validate(email, 1, "Email cannot be blank");
        validate(content, 2, "Content cannot be blank");
        // debugger;
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
        <div className="Contact">
            <h3>Contact</h3>
            <ul>
                <li><a href="https://www.linkedin.com/in/sam-ostrowski/">LinkedIn</a></li>
                <li><a href="https://github.com/isphinxs">GitHub</a></li>
            </ul>
            <form>
                <div className="title">Contact Sam</div>
                <div>
                    <label htmlFor="name">Name</label>
                    <FontAwesomeIcon className="icon" icon={faUser} size="1x" />
                    <input type="text" name="name" id="name" onChange={handleChange} placeholder="Gremelda Snitchelfink" value={name} />
                    <FontAwesomeIcon className="icon failure-icon" icon={faExclamationCircle} size="1x" />
                    <FontAwesomeIcon className="icon success-icon" icon={faCheckCircle} size="1x" />
                    <div className="error"></div>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <FontAwesomeIcon className="icon" icon={faEnvelope} size="1x" />
                    <input type="text" name="email" id="email" onChange={handleChange} placeholder="phoenix@gmail.com" value={email} />
                    <FontAwesomeIcon className="icon failure-icon" icon={faExclamationCircle} size="1x" />
                    <FontAwesomeIcon className="icon success-icon" icon={faCheckCircle} size="1x" />
                    <div className="error"></div>
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <FontAwesomeIcon className="icon" icon={faEnvelopeOpenText} size="1x" />
                    <textarea name="content" id="content" onChange={handleChange} placeholder="Hi! I'd love to connect." value={content} />
                    <FontAwesomeIcon className="icon failure-icon" icon={faExclamationCircle} size="1x" />
                    <FontAwesomeIcon className="icon success-icon" icon={faCheckCircle} size="1x" />
                    <div className="error"></div>
                </div>
                <button id="btn" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default Contact;