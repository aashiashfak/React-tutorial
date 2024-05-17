import React from "react";
import Person from "./Person";

function ListRendering() {
  //   const person = ["Jhoan", "Mathew", "Abhinav"];
  const persons = [
    {
      id:3,
      name: "Aashi",
      age: 23,
      place: "Malapppuram",
    },
    {
      id:2 , 
      name: "Anandh",
      age: 24,
      place: "Kozhikkode",
    },
    {
      id:1,
      name: "Aadhi",
      age: 27,
      place: "Ernakulam",
    },
  ];
  const PersonList = persons.map((person) => (
    <Person key={person.id} person={person}/>
  ));
  return <div>{PersonList}</div>;
}

export default ListRendering;
