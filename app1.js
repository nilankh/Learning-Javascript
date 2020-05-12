//document.getElementById()

// console.log(document.getElementById('task-title'));

// //get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

//change styling
// taskTitle.style.backgroundColor = 'cyan';

// taskTitle.style.backgroundColor = '#fff';

// taskTitle.style.padding = '15px';

// document.getElementById('task-title').style.display = 'none';

//change content

// taskTitle.textContent = 'task List';
// taskTitle.innerText = 'My name is Nilank';
// taskTitle.innerHTML = '<span style ="color:red">Task List</span>';

// document .querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';

document.querySelector('li:nth-child(4)').textContent = 'hello world';

document.querySelector('li:nth-child(odd)').style.background = 'pink';

document.querySelector('li:nth-child(even)').style.background = 'brown';






