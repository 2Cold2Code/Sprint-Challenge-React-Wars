// Write your Character component here
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Name from './Name';
import Image from './Image';
import Description from './Description';

function Character(){
    const [name, setName] = useState();
    const [species, setSpecies] = useState();
    const [origin, setOrigin] = useState();
    const [gender, setGender] = useState();
    const [image, setImage] = useState();

    useEffect( () => {
        const rickAndMorty = 'https://rickandmortyapi.com/api';;
      
        axios.get(rickAndMorty)
        .then(r => {
            console.log(r)
               axios.get(r.data.characters)
               .then(r => {
                   console.log('Axios character call = ', r)
                   setData(r.data.results)
               })
               .catch(e => console.log('Axios within axios failed: ', e));
        })
        .catch(e => console.log(e))
        }, [])
    
        const [data, setData] = useState();
        console.log('api data = ', data)
    return(
        {
        data.map( person => {
        return (
        <section>
          <Name name={person.name}/>
          <Image src={person.image}/>
          <Description species={person.species} gender={person.gender} origin={person.origin}/>
        </section> 
        )
    })
        }
    )
}
export default Character