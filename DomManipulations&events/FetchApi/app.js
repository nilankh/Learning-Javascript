document.getElementById("button1").addEventListener("click", getText);


document.getElementById("button3").addEventListener("click", getExternal);


document.getElementById("button2").addEventListener("click", getJson);


// get local text file data
function getText() {
  fetch("test.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById('output').innerHTML=data;    })
    .catch(function (err) {
      console.log(err);
    });

}

// get local json data
function getJson() {
  fetch("post.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function(post){
          output += `<li>${post.title}</li>`;
      })
      document.getElementById('output').innerHTML = output
    })
    .catch(function (err) {
      console.log(err);
    });
}


// get from external api
function getExternal() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function(user){
          output += `<li>${user.title}</li>`;
      })
      document.getElementById('output').innerHTML = output
    })
    .catch(function (err) {
      console.log(err);
    });
}
