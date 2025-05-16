import express from 'express';
const app = express();

app.get('/' , (req,res) =>{
    return res.send('hello world');
})
app.get('/about' , (req,res) =>{
    return res.send('this is About Page');
})

app.listen(8000 ,() =>console.log('Server is Running on 8000'));