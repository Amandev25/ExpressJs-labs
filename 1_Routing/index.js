import express from "express";
const app = express();

// Basic Routing..
// app.get("/" , (req,res)=>{
//     res.send("Home Page");
// });
// app.get("/about" , (req,res)=>{
//     res.send("<h1>Welcome to the about page!❤️❤️</h1>");
// });
// app.get("/Contacts" , (req,res)=>{
//     res.send("<h1>Welcome to the contact Page! </h1>");
// });

// app.listen(8000 , ()=> console.log("Server is up")
// );

// *****************Advnced Routing *********************
    // HTTP Methods
    // GET👉 Retrive data
    // POST👉 Create/insert Data
    // PUT👉 Completely update data
    // PATCH👉 Partially Update Data
    // DELETE👉 Delete Data
    // ALL👉 Any HTTP Request Method (We use this very Rarely)

   // STRING PATTERSNS
   // regex 

   // NEsted Routing
    app.get("/products/iphone" , (req , res)=>{
        res.send("<h1>This code will run if you provide /product/iphone</h1>");
    })

    app.listen(8000 , ()=> console.log("Server is up"));