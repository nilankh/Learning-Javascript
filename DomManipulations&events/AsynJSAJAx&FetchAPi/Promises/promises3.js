// promises save us from call ,a callback hell(call back hell is lot of chaining of asnychronours request)

/*
this is called call back hell
    $.ajax({

        success:function(){
            $.ajax({
                success:function(){
                    $.ajax(){
 
                    }
                }
            })
        }
    })
*/

/*
    promise1.then().then().then().catch()
*/
var userLoggedIn = true;

function checkUserLoggedIn(){
    var promise = new Promise((resolve,reject) => {

        //wait for 1 second
        setTimeout( () => {
            // Promise is resolved
            if(userLoggedIn){
                resolve("User Logged In");
            }else{
                // Reject
                reject();
            }
            
        },1000);
    });
    return promise;
}


setTimeout( () => {
    userLoggedIn = true;
},500);


checkUserLoggedIn().then( (SuccessMsg) => {
    console.log(SuccessMsg);
// catch for rejectiomn
}).catch(() =>{ console.log("User Not logged In")});


//checkUserLoggedIn().then(fetchUserFeed).then(fetchUserFriends).then(fetchUserMessages)