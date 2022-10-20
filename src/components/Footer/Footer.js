import './Footer.css';
import React from 'react';
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                        <p>Housing society</p>
                        <p>Bangladesh</p>
                    </div>
                    </div>

                    

                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +880 1317424004
                        </h4>
                    </div>


                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            wd.ashik04@gmail.com
                        </h4>
                    </div>


                </div>
                <div className="right">
                    <h4>
                        About the company
                    </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere possimus neque sit quidem veritatis, adipisci quae beatae, dicta voluptates repellat quo, incidunt assumenda.</p>


                    <div className="social">
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />

                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />

                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Footer;