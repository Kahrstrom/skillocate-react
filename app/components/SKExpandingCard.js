import React, {PropTypes} from 'react';

const myArray = ['Andreas', 'Jonatan', '', 'Emma', '', '23'];

const style = {
    myTestClass: {
        height: 100,
        width: 100,
        color: 'blue'
    },
    roundStuff: {
        height: 200,
        width: 200,
        color: 'green',
        borderRadius: '100',
        backgroundColor: 'red'
    }
};

const SKExpandingCard = ({myClick}) => {
    return (
	    <div>
	        <p>Testing testing</p>
	        <div style={style.roundStuff}>hej</div>
            <ul>
                {myArray.map(function(name, index) {
                    let v;
                    if (name.length > 0) {
                        v =  <li key={index}>{name}</li>;
                    } else {
                        v = '';
                    }
                    return v;
                })}
            </ul>

            <button onClick={myClick}>My button</button>
	    </div>
	);
};

SKExpandingCard.propTypes = {
    myClick: PropTypes.func
};
export default SKExpandingCard;
