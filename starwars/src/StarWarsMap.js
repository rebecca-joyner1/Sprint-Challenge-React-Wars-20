import React from 'react';
import './components/StarWars.css';

import Characters from './Characters';



const StarWarsMap = (props) => {
    return (
   
<div>
        {props.starwarsChars.map (Character => <Character Characters = {character} />)}

    </div>
    
    );
};

export default StarWarsMap;

