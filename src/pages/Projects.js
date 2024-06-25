import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import Cartify from '../images/download.png';
import X from '../images/twitterlogo.webp';
import Tic from '../images/tic.png'
import Typewriter from "typewriter-effect";
const Projects = () => {
  const projects = [
    {
      title: 'Cartify',
      description: 'An E-Commerce website that allows sellers to showcase their products by posting pictures, adding descriptions, including rate tags, and also allows the users to compare similar products by different sellers.',
      image: Cartify, // Replace with actual image path
      technologies: 'React, Node.js, MongoDB',
      demoLink: 'https://example.com/project1',
    },
    {
      title: 'Twitter(X)',
      description: 'Twitter clone with features like user login, registration, creating and deleting a tweet, adding an image to a tweet, liking and disliking a tweet,update profile picture including uploading images using multer',
      image: X, // Replace with actual image path
      technologies: 'React, Node.js, MongoDB',
      demoLink: 'https://example.com/project2',
    },
    {
      title: 'Tic-Tac-Toe',
      description: 'The classic game of Tic Tac Toe, brought to life with modern web technologies. This interactive and engaging project showcases my skills in HTML, CSS, and JavaScript, offering a seamless and enjoyable user experience.',
      image: Tic, // Replace with actual image path
      technologies: 'HTML,CSS,JavaScript',
      demoLink: 'https://example.com/project1',
    },

    // Add more projects as needed
  ];

  return (
    <div>
      <Navbar />
      <div className='image-fluid'>
        <Container className="projects-page">
          <h1>

            <Typewriter
              options={{
                strings: [
                  "My Works",

                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <Row>
            {projects.map((project, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
