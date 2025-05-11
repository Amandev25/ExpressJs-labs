import express from 'express';
const app = express();
console.clear();
import UserCredentials from './Middle.js';
/*
  1. Request
  2. Middleware
  3. Response

*/
// app.get('/' ,UserCredentials, (req,res)=> {
//   res.send("<h1>Welcome to the Home Page</h1>");
// })


// We don't have to provide the middleware function all the time in each route instead of this
// use app.use() method : It will be applied to all the routes
app.use(UserCredentials);
app.get('/' , (req,res)=> {
  res.send("<h1>Welcome to the Home Page</h1>");
})
app.get('/about' , (req,res)=> {
  res.send("<h1>Welcome to the About Page</h1>");
})
app.get('/Contact' , (req,res)=> {
  res.send("<h1>Welcome to the Contact Page</h1>");
})

app.listen(8000, ()=> {
    console.log("Server is Rnunning on port 8000");
    
})