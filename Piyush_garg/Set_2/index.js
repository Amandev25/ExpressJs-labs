import express from "express";
import fs from "fs";
const app = express();
const port = 8000;
import users from "./MOCK_DATA.json" assert { type: "json" };

// Middleware
app.use(express.urlencoded({ extended : false}));
//Routes
app.get("/api/users", (req,res) => {
    return res.json(users)
});
app.get("/api/users/:id", (req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    return res.json(user);
});
app.post("/api/users" , (req,res)=> {
   const body = req.body;
   users.push({...body , id: users.length + 1});
   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err ,data) => {
   return res.json({status: "pending"});
   })
   
   
   
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