import express from 'express';
const app = express();
// Route parameters
// Ecom/products/iphone/:iphoneId
app.get('/student/delete/:id' , (req,res)=>{
   // res.send("User deleted");
    res.send(req.params.id);
})


app.listen(8000 , ()=> console.log("server up!!"))