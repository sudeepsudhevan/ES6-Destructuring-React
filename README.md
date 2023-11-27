# ES6-Destructuring-React

Sample How the useState Hook Works with local example
```
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
