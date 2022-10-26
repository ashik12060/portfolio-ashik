import './Form.css';
import React from 'react';

const Form = () => {
    return (
        <div className="form-container">
            <form action="https://formspree.io/f/xnqrgpey" method="post">
                <label>Name</label>
                <input type="text" name="Name" id="" required/>
                <label>Email</label>
                <input type="email" name="Email" id=""  required/>
                <label>Subject</label>
                <input type="text" name="Subject" id=""  required/>
                <label>Messages</label>
                <textarea rows="6" name="Messages" placeholder="Type your message here" required></textarea>
                <button className="form-btn">Send</button>
            </form>
        </div>
    );
};

export default Form;