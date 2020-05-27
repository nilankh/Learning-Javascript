var circleElement = document.getElementById("circle");
console.log(circleElement);

var hTag = document.getElementsByTagName("h1");
console.log(hTag);

var text = document.getElementById("text");
console.log(text); 

var bTag = document.getElementsByTagName("body");
console.log(bTag);

var toggled = false;
circleElement.onclick = function(){
    console.log("clicked");
    if(!toggled){
        document.body.style.background = 'black';
        text.style.color = "white";
        circleElement.style.marginLeft = "80px";
        toggled = true;    
    }else{
        document.body.style.background = "white";
        text.style.color="black";
        circleElement.style.marginLeft = "0%";
        toggled = false;
    }
}