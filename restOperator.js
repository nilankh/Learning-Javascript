let displayColors = function() {
    for(let i in arguments){
        console.log(arguments[i]);
    }
}
displayColors('Red');
displayColors('Red','Blue');
displayColors('Red','Blue','Green');