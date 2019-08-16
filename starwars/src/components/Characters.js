
import React, { useState } from 'react';
import styled from 'styled-components';


const Div = styled.div`
border: 2px dashed #ffe800; 
border: 2px dotted dodgerblue;
margin: 2rem;
display: flex;
flex-direction: column;
width: 0 auto;
height: 13rem;
padding: 10px;
justify-content: center;
align-content: space-around;
`




const Character = (props) => {


    return (
        <Div>

            <h3>{props.person.name}</h3>
            <p><u>Hair Color</u>: {props.person.hair_color}</p>
            <p><u>Eye Color</u>:  {props.person.eye_color}</p>
            <p><u>Birth Year</u>: {props.person.birth_year}</p>
  
            
        </Div>
        
    );
};


export default Character;