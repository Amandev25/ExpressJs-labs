    // HTTP Methods
    // GET👉 Retrive data
    // POST👉 Create/insert Data
    // PUT👉 Completely update data
    // PATCH👉 Partially Update Data
    // DELETE👉 Delete Data
    // ALL👉 Any HTTP Request Method (We use this very Rarely)
import express from 'express';
const app =express();
// Ugly code
// app.get('/students', (req,res)=>{
//     res.send('All Students');
// })
// app.post('/students', (req,res)=>{
//     res.send('Add new Students');
// })
// app.put('/students', (req,res)=>{
//     res.send('update Students');
// })

// app.delete('/students', (req,res)=>{
//     res.send('Delete Students');
// })

// Refactor code
// **************** app.route() ********************
   
 app
 .route('/student')
 .get((req,res)=>{res.send("ALL Students")})
 .post((req,res)=>{res.send("Add new students")})
 .put((req,res)=> {res.send("update stuudents")})
 .delete((req,res)=>res.send("Delete students"));

app.listen(8000,() =>console.log('Server is up'));