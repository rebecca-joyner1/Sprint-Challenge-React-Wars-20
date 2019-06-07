import React from 'react';
import './StarWars.css';

import Characters from './Characters';



const StarWarsMap = (props) => {
    return (
        <div className="star-map">

            {props.characters.map(character => <Characters character={character} />)}
            
        </div>
    );
};

export default StarWarsMap;