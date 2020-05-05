// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import Description from './Description'

function Character() {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people/")
      .then((response) => {
        setCharacter(response.data.results);
      })
      .catch((error) => console.log("error", error));
  }, []);

  console.log("data after api call: ", character);

  return character.map((obj) => {
    return (
      <section
        style={{
          width: "98%",
          backgroundColor: "red",
          border: "1px solid black",
          display: "flex",
          flexFlow: "row-wrap",
          justifyContent: "space-around",
          marginBottom: "2px",
          alignSelf: "center"
        }}
      >
        <h1 className="name">{obj.name}</h1>
        <Description gender={obj.gender} eyes={obj.eye_color} birthYear={obj.birth_year} hair={obj.hair_color}/>
      </section>
    );
  });
}

export default Character;
