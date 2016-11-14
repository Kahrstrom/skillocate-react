import React from 'react';
import {Link} from 'react-router';
import SKCard from './SKCard';

const Home = () => {
    let cards = [];
    for(let i = 0; i < 3; i++) {
        let title = 'Card no.' + i;
        cards.push(<SKCard title={title} subtitle="testar" key={i} body="Testar något nytt..."/>);
    }

    return (
        <div>
            <h1>Home</h1>
            Here be home stuff!
            <Link to="/userdetails">User details!</Link>
            {cards}
        </div>
    );
};

export default Home;
