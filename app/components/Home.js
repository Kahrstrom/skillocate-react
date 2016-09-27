import React from 'react';
import SKExpandingCard from './SKExpandingCard';

const myClick = function() {
    alert('YOLO SWAG');
};

const Home = () => {
    return (
        <SKExpandingCard myClick={myClick} />
    );
};

export default Home;
