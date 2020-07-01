// let employee = ["Nilank", "Nikhil","Male"];

let employee = {
    fname: "Nilank",
    lname: "Nikhil",
    gender: "Male"
};
// let {fname, lname, gender} = employee;
// creating alias
let {fname: f, lname: l, gender: g} = employee;

console.log(f);
console.log(l);
console.log(g);
