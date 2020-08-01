function easyHTTP2() {
    this.http = new XMLHttpRequest();
}

// Make a HTTP GET Request
easyHTTP2.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    
    let self = this;
    this.http.onload = function() {//without using arrow function
    // this.http.onload = () => {
        if(self.http.status === 200) {
            callback(null, self.http.responseText);
        }else{
            callback('Error: ' + self.http.status)
        }
    }
    
    this.http.send();
}

// Make a HTTP POST Request

// Make a HTTP PUT Request

// Make a HTTP DELETE Request