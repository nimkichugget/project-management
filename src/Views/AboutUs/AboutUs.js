import React from 'react';
import image from './AboutUs.jpeg';

function AboutUs() {
    return (
        <>
            <h1>My Favourite Meme From This Course</h1>
            <img src={image} style={{maxWidth: "1000px"}} />
        </>
    );
};

export default AboutUs;