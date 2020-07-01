// var employee = {
//     id: 1,
//     greet: function() {
//         var self = this;
//         setTimeout(function() {console.log(self.id)}, 1000); 
//     }
// };

var employee = {
    id: 1,
    greet: function() {
        
        setTimeout(() => {console.log(this.id)}, 1000); 
    }
    // whenever we will use arrow function it is not going to create it own this, it is goiing to refer its parent this
};
employee.greet();