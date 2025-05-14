import express from 'express';
import path from 'path';
import router from './Routes/route.js';

const app = express();

app.set('View Engine' , "ejs");

app.use("/" ,router);

app.listen(8000 ,() => console.log('Server is running on 8000')
)