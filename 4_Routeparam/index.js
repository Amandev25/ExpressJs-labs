import express from 'express';
const app = express();
// Route parameters
// Ecom/products/iphone/:iphoneId
app.get('/product/order/:day/:month/:year' , (req,res)=>{
   // res.send("User deleted");
   // res.send(req.params.model);
   const {day,month,year} =req.params;
   res.send(`This product was ordered on ${day}/${month}/${year}`);
})


app.listen(8000 , ()=> console.log("server up!!"))