var getRegValue = function() {
    return 10;
}
console.log(getRegValue());

// const getArrowValue = () => {
//     return 12;
// }
// const getArrowValue = () => 12;
const getArrowValue = (m) => 12*m;


console.log(getArrowValue(5));