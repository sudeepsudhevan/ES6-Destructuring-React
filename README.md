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
const {feedingRequirements:{food,water}} = cat;

console.log(food);

console.log(useAnimals(cat));
const [animal, makeSound]= useAnimals(cat)

console.log(animal);
makeSound()
```
