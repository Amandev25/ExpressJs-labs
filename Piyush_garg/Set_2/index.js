import express from "express";
import mongoose from "mongoose";
import fs from "fs";
const app = express();
const port = 8000;
import users from "./MOCK_DATA.json" assert { type: "json" };

/// Schema 
const userSchema = new mongoose.Schema({
    firstName : {
        type :String,
        required :true, // this field is Mandatory
    },
    lastName : {
        type :String,
        required :false // this field is not Mandatory and can be left empty
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    jobtitle : {
        trpe :String,

    },
    gender : {
        type :String,
    }
})
// Connecting to MOngoDB

mongoose
.connect("mongodb://127.0.0.1:27017/youtube_app_1")
.then(() => {console.log("Connected to MongoDB")})
.catch((error) => {console.log("Error Connecting to MongoDB", error)})
// Creating a Model
const User = mongoose.model("User" , userSchema);

// Middleware
app.use(express.urlencoded({ extended : false}));
//Routes
app.get("/api/users", (req,res) => {
    res.setHeader("X-MYHEADER" , "Aman~Yadav")
    return res.json(users)
});
app.get("/api/users/:id", (req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    if(!user){
        return res.status(404).json({error : "User not Found"})
    }
    return res.json(user);
});
app.post("/api/users" , async(req,res)=> {
   const body = req.body;
   if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title ){
    return res.status(400).json({error : "Please provide all required details"})}
   users.push({...body , id: users.length + 1});
   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err ,data) => {
   return res.json({status: "pending"});
   })
   
   await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender : body.gender,
    jobtitle: body.job_title,
   })
    console.log("result");
   return res.status(201).json({ msg: "User Created "})
   
});



app.listen(port , () => console.log("Server is Running on port" + port)
)

// app.get("/users", (req,res) => {
//     const html = `
//     <ul>${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
// });