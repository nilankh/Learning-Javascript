let displayColors = function() {
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

let message = "List of colors"
displayColors(message,'Red');
displayColors(message,'Red','Blue');
displayColors(message,'Red','Blue','Green');