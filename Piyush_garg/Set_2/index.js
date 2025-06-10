import express from "express";
import mongoose from "mongoose";
import fs from "fs";
import router from "./Routes/routes.js";
import User from "./models/user.js";
const app = express();
const port = 8000;
import users from "./MOCK_DATA.json" assert { type: "json" };



// Connecting to MOngoDB

mongoose
.connect("mongodb://127.0.0.1:27017/youtube_app_1")
.then(() => {console.log("Connected to MongoDB")})
.catch((error) => {console.log("Error Connecting to MongoDB", error)})


app.use("/user" , userRouter);




app.listen(port , () => console.log("Server is Running on port" + port)
)

// app.get("/users", (req,res) => {
//     const html = `
//     <ul>${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
// });