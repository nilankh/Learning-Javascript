function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make a HTTP GET Request
easyHTTP.prototype.get = function(url) {
    this.http.open('GET', url, true);
    
    let self = this;
    this.http.onload = function() {//without using arrow function
    // this.http.onload = () => {
        if(self.http.status === 200) {
            console.log(self.http.responseText)
        }
    }
    
    this.http.send();
}

// Make a HTTP POST Request

// Make a HTTP PUT Request

// Make a HTTP DELETE Request