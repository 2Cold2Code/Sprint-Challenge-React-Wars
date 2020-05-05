import React from "react";

function Description(props) {
    console.log(props)
  return (
    <section
      style={{
        border: '1px solid black',
        width: "20%",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
        alignSelf: "flex-end"
      }}
      className="main-content"
    >
      <p>{`Gender: ${props.gender}`}</p>
      <p>{`Eye color: ${props.eyes}`}</p>
      <p>{`born ${props.birthYear}`}</p>
      <p>{`Hair color: ${props.hair}`}</p>
    </section>
  );
}

export default Description;
