import React from 'react';

import './components/StarWars.css';



const  Character= (props) => {
    return (

        <div className='character'>
            
            <h1>Name:</h1>
              <p>{props.Character.name}</p>
            
            <h1>Birth Year:</h1>
              <p>{props.Character.birth_year}</p>

            <h1>Gender:</h1>
            <p>{props.Character.gender}</p>

            <h1>Eye Color</h1>
            <p>{props.Character.eye_color}</p>

            <h1>Hair Color</h1>
            <p>{props.Character.hair_color}</p>
            
        </div>
    );
};

export default Character;