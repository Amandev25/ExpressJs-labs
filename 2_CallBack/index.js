import express from "express";
const app = express();
// More in Callbacks .. how can we provide more thaan one callback functionto a route
// app.get('/single-cb', (req,res) => {
//    res.send("<h1>Single Callback</h1>");
// })

//  app.get('/double-cb',
//     (req,res ,next)=>{
//         console.log("First callback function");
//         next(); // this will call the next callback function in the chain
//     },
//     (req,res)=>{
//         res.send("Second callback function");
//     }
//  )


// ******************** ARRAY OF CALLBACKS ********************
console.clear();
// const cb1 = (req, res,next) => {
//     console.log("first CallBack");
//     next();
// }
// const cb2 = (req, res ,next) => {
//     console.log("Second CallBack");
//     next();
// }
// const cb3 = (req, res) => {
//     console.log("Third CallBack");
//     res.send("Array of callback functions");
// }

// app.get("/array-cb" , [cb1,cb2,cb3])
const cb1 = (req, res,next) => {
       console.log("first CallBack");
         next();}
const cb2 = (req, res,next) => {
       console.log("Second CallBack");
         next();}
app.get("/crazyness" ,[cb1,cb2] , (req,res,next)=> {
   console.log("third callback");
   next();
},
  (req, res,next) => {
    console.log("Fourth CallBack");
      res.send("ARRAY OF CALLBACKS");
})         


app.listen(5000,()=> console.log("Server is running on port 5000")
);