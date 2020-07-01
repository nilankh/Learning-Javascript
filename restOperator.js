// let displayColors = function() {
//     console.log(message);
//     for(let i in arguments){
//         console.log(arguments[i]);
//     }
// }
let displayColors = function(message, ...colors) {
    console.log(message);
    for(let i in colors){
        console.log(colors[i]);
    }
}

let message = "List of colors"
displayColors(message,'Red');
displayColors(message,'Red','Blue');
displayColors(message,'Red','Blue','Green');