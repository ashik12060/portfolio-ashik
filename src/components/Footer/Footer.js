import './Footer.css';
import React from 'react';
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Green Road, Dhanmondi</p>
                            <p>Bangladesh</p>
                        </div>
                    </div>
 



                    <div>
                        <i class="fa-brands fa-facebook"></i>
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
                        About me!
                    </h4>
                    <p>I am a Web Developer with a
                        professional expertise in the field of
                        Web application development with
                        MERN stack. I have a strong passion
                        over technologies. One of my biggest
                        strengths is, I believe in result..</p>


                    <div className="social">
                        <span>
                            <a href="https://www.facebook.com/wd.ashik04" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={40} style={{ color: "#fff", marginRight: "1rem" }} />
                            </a>

                        </span>
                        <span>
                            <a href="https://www.instagram.com/ashik_mahmood15/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={40} style={{ color: "#fff", marginRight: "1rem" }} />
                            </a>

                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/ashik-mahmood060/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={40} style={{ color: "#fff", marginRight: "1rem" }} />
                            </a>

                        </span>

                    </div>

                </div>


            </div>

        </div>
    );
};

export default Footer;