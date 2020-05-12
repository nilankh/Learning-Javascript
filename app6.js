

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log("ho gya click");
//     e.preventDefault();
// });



// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//     // console.log('clicked');
//     let val;
//     val = e;
    
//     // event target element
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;
//     // e.target.innerText = 'Hello';

//     // Event Type
//     val = e.type;

// timestamp
// val = e.timeStamp;
// cord event relative to the window
// val=e.clientY;
// val = e.clientx;


// coords event relative to thee element
// val =e.offsetY;
// val = e.offsetX;
//     console.log(val);
// }


document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);

function onClick(e){
    // console.log('clicked');
    let val;
    val = e;
    
    // event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    // e.target.innerText = 'Hello';

    // Event Type
    val = e.type;

    console.log(val);
}