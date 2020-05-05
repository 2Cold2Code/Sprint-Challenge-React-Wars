// Write your Character component here
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Character(){
    const [character, setCharacter] = useState([]);
    useEffect(() => {
        axios.get("https://swapi.py4e.com/api/people/")
        .then(response => {
         setCharacter(response.data.results);
        })
        .catch(error => console.log("error", error));
    }, []);

     console.log('data after api call: ', character);
     
  
     return (
         character.map( (obj) => {
         return (
        <section style={{
            width: '95%',
            backgroundColor: 'red',
           border: '1px solid black',
            display: 'flex',
            flexFlow: 'row-wrap',
            justifyContent: 'space-around'
        }}>
           <h1 className='name'>{obj.name}</h1>
           <section style={{
            backgroundColor: 'palevioletred',
            width: '20%',
            display: 'flex',
            flexFlow: 'row-wrap',
            justifyContent: 'space-around'
        }} className='main-content'>
            <p>{`Gender: ${obj.gender} Eye color: ${obj.eye_color}, born ${obj.birth_year}`}</p>
            <p>{`Hair color: ${obj.hair_color}`}</p>
           </section>
         </section>
         )}
             
         )
     
     )
}

export default Character