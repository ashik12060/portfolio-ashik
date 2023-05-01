import React from 'react';
import WorkCard from '../components/Card/WorkCard';
import Footer from '../components/Footer/Footer';
import HeroImg from '../components/HeroImg/HeroImg';
import Navbar from '../components/Navbar/Navbar';


const Home = () => {
    return (
        <div>
          <Navbar></Navbar> 
          <HeroImg></HeroImg>
          
           <WorkCard></WorkCard>
          <Footer></Footer>
        </div>
    );
};

export default Home;