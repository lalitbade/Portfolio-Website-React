// Footer.js

import React from 'react';
import './Footer.css';
import LinkedIn from '../images/linkedin.png';
import Insta from '../images/instagram.png';
import Facebook from '../images/facebook.png';
import Twiiter from '../images/twitter.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 social">
                        <a href="https://www.linkedin.com/in/lalitbade/"><img src={LinkedIn} alt="LinkedIn" /></a>
                        <a href="https://www.facebook.com/lalitfingerstyleguitar"><img src={Facebook} alt="Facebook" /></a>
                        <a href="#"><img src={Twiiter} alt="Twitter" /></a>
                        <a href="https://www.instagram.com/lalitbade13"><img src={Insta} alt="Instagram" /></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center">&copy; 2024 Designed By Lalit Bade</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
