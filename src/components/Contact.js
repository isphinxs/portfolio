import React from 'react';

function Contact() {
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
                    <i className="fas fa-user"></i>
                    <input type="text" name="name" id="name" placeholder="Gremelda" />
                    <i className="fas fa-exclamation-circle failure-icon"></i>
                    <i className="far fa-check-circle success-icon"></i>
                    <div className="error"></div>
                </div>
                <div></div>
                <div></div>
            </form>
        </div>
    )
}

export default Contact;