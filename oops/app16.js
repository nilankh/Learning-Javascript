class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    getsMarried(newLastName){
        this.lastName = newLastName;
    }
    static addNumber(x, y){
        return x + y;
    }
}
const neel = new Person('Neel',"punj", '11-13-1980');

neel.getsMarried('sjkdsdk');

console.log(neel.greeting());

console.log(Person.addNumber(1, 2));