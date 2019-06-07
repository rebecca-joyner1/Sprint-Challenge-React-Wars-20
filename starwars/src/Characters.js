import React from 'react';

import './components/StarWars.css';



const  Character= (props) => {
    return (

        <div className='character'>
            
            <h1>Name:</h1>
              <p>{props.Characters.name}</p>
            
            <h1>Birth Year:</h1>
              <p>{props.Characters.birth_year}</p>

            <h1>Gender:</h1>
            <p>{props.Characters.gender}</p>

            <h1>Eye Color</h1>
            <p>{props.Characters.eye_color}</p>

            <h1>Hair Color</h1>
            <p>{props.Characters.hair_color}</p>
            
        </div>
    );
};

export default Character;