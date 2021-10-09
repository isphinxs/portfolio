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
                    <FontAwesomeIcon icon={faUser} />
                    <input type="text" name="name" id="name" placeholder="Gremelda Snitchelfink" />
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <div className="error"></div>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type="text" name="email" id="email" placeholder="phoenix@gmail.com" />
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <div className="error"></div>
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                    <textarea name="content" id="content" placeholder="Hi! I'd love to connect." />
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <div className="error"></div>
                </div>
                <button id="btn" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default Contact;