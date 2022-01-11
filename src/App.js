// rafce
import React from 'react';

// import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            {/* What our brand is about */}
            <Brand /> 
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
