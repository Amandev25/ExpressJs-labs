import express from "express";
const app = express();
import router from "./student.js";

app.use("/students", router);




app.listen(8000, () => console.log("Server is runnning")
)