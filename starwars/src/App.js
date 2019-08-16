import React, {useState, useEffect} from 'react';
import './App.css';

import Characters from './components/Characters';

import styled from 'styled-components';

import axios from "axios";



const App = () => {

  const [character, setData] = useState();
  useEffect(() => {
    axios.get("https://swapi.co/api/people")
      .then(res => {
        setData(res.data.results);

      }, []);

  });


  if (!character) {
    return <h1>loading</h1>
    } else {
      return (
        <div className="App">
          <h1 className="Header">React Wars</h1>
    
          
          {Characters.name}
    
    {character.map((characters) => <Characters person = {characters} /> )}
        </div>
      );
  }
  
  }


export default App;