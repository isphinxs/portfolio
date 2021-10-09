import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faEnvelopeOpenText, faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const handleClick = () => {
        debugger;
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
                    <FontAwesomeIcon className="icon" icon={faUser} size="med" />
                    <input type="text" name="name" id="name" placeholder="Gremelda Snitchelfink" />
                    <FontAwesomeIcon className="icon failure-icon" icon={faExclamationCircle} size="med" />
                    <FontAwesomeIcon className="icon success-icon" icon={faCheckCircle} size="med" />
                    <div className="error"></div>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <FontAwesomeIcon className="icon" icon={faEnvelope} size="med" />
                    <input type="text" name="email" id="email" placeholder="phoenix@gmail.com" />
                    <FontAwesomeIcon className="icon failure-icon" icon={faExclamationCircle} size="med" />
                    <FontAwesomeIcon className="icon success-icon" icon={faCheckCircle} size="med" />
                    <div className="error"></div>
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <FontAwesomeIcon className="icon" icon={faEnvelopeOpenText} size="med" />
                    <textarea name="content" id="content" placeholder="Hi! I'd love to connect." />
                    <FontAwesomeIcon className="icon failure-icon" icon={faExclamationCircle} size="med" />
                    <FontAwesomeIcon className="icon success-icon" icon={faCheckCircle} size="med" />
                    <div className="error"></div>
                </div>
                <button id="btn" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default Contact;