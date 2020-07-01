var employee = {
    id: 1,
    greet: function() {
        setTimeout(function() {console.log(this.id)}, 1000); 
    }
};
employee.greet();