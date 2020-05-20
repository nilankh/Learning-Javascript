// Object.prototype
// Person.prototype

function Person(firstName, lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// Calulate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get fulName
Person.prototype.getFUllName = function(){

    return `${this.firstName} ${this.lastName}`;
}

// Get married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe','9-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');
console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFUllName());

mary.getsMarried('Smith');
console.log(mary.getFUllName());
console.log(mary.hasOwnProperty('firstName'));