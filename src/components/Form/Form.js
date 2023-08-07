import './Form.css';
import React from 'react';

const Form = () => {
    return (
        <div className="form-container">
            <h2>Let me know your query</h2>
            <hr />
            <form action="https://formspree.io/f/xnqrgpey" method="post" >
                <label>Name</label>
                <input type="text" name="Name" id="" required />
                <label>Email</label>
                <input type="email" name="Email" id="" required />
                <label>Subject</label>
                <input type="text" name="Subject" id="" required />
                <label>Messages</label>
                <textarea rows="6" name="Messages" placeholder="Type your message here" required></textarea>
            
                <div className="btn-container-1">
                    <button className="btn-btn2 new-btn-form">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Form;