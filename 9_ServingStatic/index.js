import express from 'express';
import path from 'path';
const app = express();
//.static is a built-in middleware function in Express. It serves static files and is based on serve-static.
// It is used to serve static files such as images, CSS files, and JavaScript files.
// app.use(express.static("./public"))

// app.get("/" ,(req,res)=>{
//     res.sendFile(path.join(process.cwd(), "./public/index.html"));
// })


app.listen(8000 , ()=> console.log("Server is up"));