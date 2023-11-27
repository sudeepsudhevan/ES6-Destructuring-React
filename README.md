# ES6-Destructuring-React

Sample How the useState Hook Works, understanding with local example
```
const animals = [
  { name: "cat", sound: "meow", feedingRequirements:{
    food:2,
    water:3
  } },
  { name: "dog", sound: "woof" }
];
function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ]
}

export default animals;
export {useAnimals};
```
```
console.log(useAnimals(cat));
const [animal, makeSound]= useAnimals(cat)

console.log(animal);
makeSound()
```
While Destructuring an Array we can use custom name
```
const [cat,dog] = animals;
```

while Destructuring an Object you should use same name 
```
const {name, sound} = cat;
```

* we can change name by using like this
```
const {name: catName, sound: catSound} = cat;
```

* Go further into the Sample by using like this
```
const {feedingRequirements:{food,water}} = cat;
```
