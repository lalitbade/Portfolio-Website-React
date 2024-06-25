import React from 'react';
import BanImg from '../images/clint-patterson-dYEuFB8KQJk-unsplash.jpg';
import './HomePage.css';
import Typewriter from "typewriter-effect";
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="banner-container">
            <Navbar/>
                <img src={BanImg} alt="Banner" className="banner-img" />
                <div className="overlay"></div>
                <div className="text-container">
                    <h1>Hey! I am <strong>Lalit</strong></h1>
                    <h2>
                        <Typewriter
                            options={{
                                strings: [
                                    "Full Stack Developer",
                                    "Student",
                                    "Guitarist",
                                    "Coder",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </h2>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;
