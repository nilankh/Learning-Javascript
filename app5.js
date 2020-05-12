// Replace Element


// create element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// new text node
newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// classes and attr
const firstLi = document.querySelector('li:first-child');
const link =firstLi.children[0];

let val;
// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title','google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;


console.log(val);