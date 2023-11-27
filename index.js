// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice"

const [honda,tesla] = cars;

const {coloursByPopularity:[hondaTopColour],speedStats:{topSpeed:hondaTopSpeed}} = honda;
// const [hondaTopColour] = coloursByPopularity;
// const hondaTopSpeed = speedStats.topSpeed

const {coloursByPopularity:[teslaTopColour],speedStats:{topSpeed:teslaTopSpeed}} = tesla;
// const teslaTopColour = coloursByPopularity[0];
// const teslaTopSpeed = speedStats.topSpeed

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);


import animals, {useAnimals} from "./data";
// console.log(animals);

const [cat,dog] = animals;
const {name: catName, sound: catSound} = cat;
// console.log(catSound);

const {feedingRequirements:{food,water}} = cat;

console.log(food);

console.log(useAnimals(cat));
const [animal, makeSound]= useAnimals(cat)

console.log(animal);
makeSound()
