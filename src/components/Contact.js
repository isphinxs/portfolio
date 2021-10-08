import React from 'react';

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
                    <i className="fas fa-user"></i>
                    <input type="text" name="name" id="name" placeholder="Gremelda Snitchelfink" />
                    <i className="fas fa-exclamation-circle failure-icon"></i>
                    <i className="far fa-check-circle success-icon"></i>
                    <div className="error"></div>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <i className="fas fa-envelope"></i>
                    <input type="text" name="email" id="email" placeholder="phoenix@gmail.com" />
                    <i className="fas fa-exclamation-circle failure-icon"></i>
                    <i className="far fa-check-circle success-icon"></i>
                    <div className="error"></div>
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <i className="fa-solid fa-envelope-open-text"></i>
                    <textarea name="content" id="content" placeholder="Hi! I'd love to connect." />
                    <i className="fas fa-exclamation-circle failure-icon"></i>
                    <i className="far fa-check-circle success-icon"></i>
                    <div className="error"></div>
                </div>
                <button id="btn" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default Contact;