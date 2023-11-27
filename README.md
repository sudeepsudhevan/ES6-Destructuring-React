# ES6-Destructuring-React

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
