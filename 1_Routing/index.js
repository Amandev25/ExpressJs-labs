import express from "express";
const app = express();

// Basic Routing..
app.get("/" , (req,res)=>{
    res.send("Home Page");
});
app.get("/about" , (req,res)=>{
    res.send("<h1>Welcome to the about page!❤️❤️</h1>");
});
app.get("/Contacts" , (req,res)=>{
    res.send("<h1>Welcome to the contact Page! </h1>");
});

app.listen(8000 , ()=> console.log("Server is up")
);