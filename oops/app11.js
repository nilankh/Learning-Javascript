// const brad = {
//     name: 'Brad',
//     age: 30
// }
// console.log(brad);
// // console.log(brad.age);

// Person constructor
function Person(name) {
    this.name = name;
    // this key work refers to the current instance of the object
}

const brad = new Person('Brad');
const john = new Person('John');
console.log(john);