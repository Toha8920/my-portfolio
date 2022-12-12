import React from 'react';
import About from './About';
import Blog from './Blog';
import Bot from './Bot';
import Contact from './Contact';
import Hero from './Hero';
import Hireme from './Hireme';
import Project from './Project';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Bot />
            <Hero />
            <About />
            <Skills />
            <Hireme />
            <Project />
            <Blog />
            <Contact />
        </div>
    );
};

export default Home;