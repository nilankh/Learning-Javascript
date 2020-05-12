let val;
const list = document.querySelector('ul.collection');
// console.log(list);
const listItem = document.querySelector('li.collection-item:first-child');
// console.log(listItem);

val = listItem;
val = list;

//get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute(depreciated)
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent='Hello';
// children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// first child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

// count child element
val = list.childElementCount;

// get parent Node
val = listItem.parentNode;
val = listItem.parentElement;
val = list.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// get prev sibling

val = listItem.previousSibling;
val = listItem.previousElementSibling;


console.log(val);