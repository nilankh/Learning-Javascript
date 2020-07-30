// promises basically means u r promising something

// a promise is a object that eventually indicates a success or failure of an asynchronous task


var userLoggedIn = true;

// create a promise
var promise = new Promise((resolve,reject) => {

    //wait for 1 second
    setTimeout( () => {
        // Promise is resolved
        if(userLoggedIn){
            resolve();
        }else{
            // Reject
            reject();
        }
        
    },1000);
});

// setTimeout( () => {
//     userLoggedIn = false;
// },500);

// when promise is completed then execute this
promise.then(() => {
    console.log("User Logged In");
// catch for rejectiomn
}).catch(() =>{ console.log("User Not logged In")});


//ye wala successful show krega
// var promise = new Promise((resolve,reject) => {

//     //wait for 1 second
//     setTimeout( () => {
//         // Promise is resolved
//         resolve();
//     },1000);


// });

// promise.then(() => {
//     console.log("Successful");
// });

