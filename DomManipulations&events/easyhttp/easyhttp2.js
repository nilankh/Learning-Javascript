function easyHTTP2() {
  this.http = new XMLHttpRequest();
}

// Make a HTTP GET Request
easyHTTP2.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  let self = this;
  this.http.onload = function () {
    //without using arrow function
    // this.http.onload = () => {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};

// Make a HTTP POST Request
easyHTTP2.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  let self = this;
  this.http.onload = function () {
    //without using arrow function
    // this.http.onload = () => {

    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};


// Make a HTTP PUT Request
easyHTTP2.prototype.put = function (url, data, callback) {
    this.http.open("PUT", url, true);
    this.http.setRequestHeader("Content-type", "application/json");
    let self = this;
    this.http.onload = function () {
      //without using arrow function
      // this.http.onload = () => {
  
      callback(null, self.http.responseText);
    };
  
    this.http.send(JSON.stringify(data));
  };


// Make a HTTP DELETE Request
