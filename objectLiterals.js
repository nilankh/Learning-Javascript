let firstName = "Nilank";
let lastName = "Nikhil";

// let person = {
//     firstName: firstName,
//     lastName: lastName
// };
let person = {
    // when property name is same as the variable name then we can reduce below like this
    firstName,
    lastName
};


function createPerson(firstName, lastName) {
    let fullname = firstName + " " + lastName;
    return {firstName, lastName, fullname}
}
let p = createPerson("Nilank", "Nikhil");
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullname);



// console.log(person.firstName);
// console.log(person.lastName);