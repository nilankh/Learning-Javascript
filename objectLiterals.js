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


// aise v kr skte h space de kr beech bs uske lia hme fir "" iske andar rkhna hoga
let ln = "last name";//we can also use variables as property names
let person2 = {
    "first name":"chandler",
    [ln]: "Punj"//but we have to used like this in square bracket when we are using variable as property names
};
console.log(person2["first name"]);
console.log(person2)




// function createPerson(firstName, lastName) {
//     let fullname = firstName + " " + lastName;
//     return {firstName, lastName, fullname}
// }

function createPerson(firstName, lastName, age) {
    let fullname = firstName + " " + lastName;
    return {
        firstName, 
        lastName, 
        fullname,
        // isSenior: function() {
        //     return age > 60;
        // }}
        // this is also we can write this
        isSenior() {
            return age > 60;
        }}
        
}
let p = createPerson("Nilank", "Nikhil", 21);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullname);
console.log(p.isSenior());


// console.log(person.firstName);
// console.log(person.lastName);