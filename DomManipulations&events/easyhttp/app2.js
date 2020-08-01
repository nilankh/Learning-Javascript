const http = new easyHTTP2();

// GET POSTS
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err) {
//         console.log(err);
//     }else{
//         console.log(posts);
//     }
// });

// get single post
// GET POSTS
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
//     if(err) {
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

// Create data
const data = {
  title: "Custom Post",
  body: "This is a custom post",
};

// create post
http.post("https://jsonplaceholder.typicode.com/posts", data, function (err, post) {
    if(err){
        console.log(err)
    }else{
        console.log(post)
    }
});
