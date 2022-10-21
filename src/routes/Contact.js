import React from 'react';
import Footer from '../components/Footer/Footer';
import Heroimg2 from '../components/Heroimg2/Heroimg2';
import Navbar from '../components/Navbar/Navbar';

const Contact = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Heroimg2 heading="CONTACT" text="Let's have a chat!"></Heroimg2>
            <Footer></Footer>
            
        </div>
    );
};

export default Contact;