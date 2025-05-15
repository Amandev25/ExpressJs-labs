import express from 'express';
const app = express();

app.set('view engine', 'ejs');

app.get('/' , (req, res) => {
    res.render('index',{
        user: "Aman",
        title : "EJS Template Engine"
    });
})

app.listen(8000 , () => console.log('Server is Running on Port 8000')
)