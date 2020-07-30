var userLoggedIn = true;

function checkUserLoggedIn() {
  var promise = new Promise((resolve, reject) => {
    //wait for 1 second
    setTimeout(() => {
      // Promise is resolved
      if (userLoggedIn) {
        resolve("User Logged In");
      } else {
        // Reject
        reject();
      }
    }, 1000);
  });
  return promise;
}

setTimeout(() => {
  userLoggedIn = true;
}, 500);

checkUserLoggedIn()
  .then((SuccessMsg) => {
    console.log(SuccessMsg);
    // catch for rejectiomn
  })
  .catch(() => {
    console.log("User Not logged In");
  });
