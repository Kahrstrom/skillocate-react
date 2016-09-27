import React from 'react';
import {Link} from 'react-router';
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            Here be home stuff!
            <Link to="/userdetails">User details!</Link>
        </div>
    );
};

export default Home;
