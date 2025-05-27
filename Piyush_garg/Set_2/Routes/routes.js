import express from 'express';
import users from "./MOCK_DATA.json" assert { type: "json" };
import fs from 'fs';
const router = express.Router();
//Routes


router.get("/", (req,res) => {
    res.setHeader("X-MYHEADER" , "Aman~Yadav")
    return res.json(users)
});
router.get("/:id", (req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    if(!user){
        return res.status(404).json({error : "User not Found"})
    }
    return res.json(user);
});
router.post("/" , async(req,res)=> {
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
export default router;