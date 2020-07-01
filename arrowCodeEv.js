var getRegValue = function() {
    return 10;
}
console.log(getRegValue());

// const getArrowValue = () => {
//     return 12;
// }
// const getArrowValue = () => 12;

// const getArrowValue = (m) => 12*m;
// const getArrowValue = m => 12*m;
const getArrowValue = (m, bonus) => 12*m+bonus;


console.log(getArrowValue(5, 50));
console.log(typeof getArrowValue);