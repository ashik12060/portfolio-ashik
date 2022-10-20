import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroImg from '../components/HeroImg/HeroImg';
import Navbar from '../components/Navbar/Navbar';


const Home = () => {
    return (
        <div>
          <Navbar></Navbar> 
          <HeroImg></HeroImg>
          <Footer></Footer>
        </div>
    );
};

export default Home;