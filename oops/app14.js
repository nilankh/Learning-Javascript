// Person constructior
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Nilank', 'Nikhil');
// console.log(person1.greeting());

// Customer constructors
function Custmer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;

}
// Inherit the person prototype methods
Custmer.prototype = Object.create(Person.prototype);

// Make customer.prototype return custmer
Custmer.prototype.constructor = Custmer;

// Creta custmer
const customer1 = new Custmer('Tom', 'smith','832428', 'standard');

console.log(customer1);

// Customer greeting
Custmer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());

