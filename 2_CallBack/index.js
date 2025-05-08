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


app.listen(5000,()=> console.log("Server is running on port 5000")
);