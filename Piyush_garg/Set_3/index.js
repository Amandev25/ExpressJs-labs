import express from "express";
import mongoose from"mongoose";
const app = express();
const port = 8000;
import users from "./MOCK_DATA.json" assert { type: "json" };

app.use(express.urlencoded({ extended : false}));
app.use((req,res,next)=>{
    console.log("Hello from Middleware 1");
   next();
})
app.use((req,res,next)=>{
    console.log("Hello from Middleware 2");
   return res.end("Ended response")
})

app.get("/users", (req,res) => {
    return res.json(users)
});



app.listen(port , () => console.log(`Server is Running on port ${port}`));