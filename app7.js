const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// CLick
// clearBtn.addEventListener('click', runEvent);
// double click
// clearBtn.addEventListener('dblclick', runEvent);
// mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mouse enter
// card.addEventListener('mouseenter', runEvent);
// // mouseleave
// card.addEventListener('mouseleave', runEvent);
// // mouseover
// card.addEventListener('mouseover', runEvent);
// // mouseout
// card.addEventListener('mouseout', runEvent);
// mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e){
    console.log(`Event type: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

// console.log(heading);