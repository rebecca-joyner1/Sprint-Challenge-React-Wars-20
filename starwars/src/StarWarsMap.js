import React from 'react';
import './components/StarWars.css';

import Character from './Characters';



const StarWarsMap = (props) => {
    return (
   
<div>
        {props.starwarsChars.map (character => <Character Characters = {character} />)}

    </div>
    
    );
};

export default StarWarsMap;

