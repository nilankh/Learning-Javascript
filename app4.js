// creating  elements

const li = document.createElement('li');

// add class
li.className = 'collection-item';

// add id
li.id = "new-item";

// add attribute
li.setAttribute('title', 'New Item');


// create text Node and append
li.appendChild(document.createTextNode('Hello Ramu'));

// create new link Element
const link = document.createElement('a');
// console.log(link);

// add classes
link.className = 'delete-item secondary-content';
// console.log(link);

// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'
console.log(link);

// append link into li
li.appendChild(link);


// append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
