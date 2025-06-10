import express from "express";
import "dotenv/config" ;
import logger from "./logger.js";
import morgan from "morgan";
const app =express();
const PORT = process.env.PORT || 8000;
app.use(express.json());

const morganFormat = ':method :url :status :response-time ms' ;
let index = 1;
let teas_list = [];
app.use(morgan(morganFormat, {
    stream: {
        write:(message) =>{
            const logObject = {
                method : message.split(' ')[0],
                url : message.split(' ')[1],
                status : message.split(' ')[2],
                responseTime : message.split(' ')[3]
            };
            logger.info(JSON.stringify(logObject));
        }
    }
}))
app.post("/teas" , (req,res)=> {
    logger.info("Recieved a Request to add a new tea");
    const {name , price} =req.body;
    let tea = {id: index++ , name , price};
    teas_list.push(tea);
    res.status(201).send(teas_list);
});

app.get("/teas" , (req,res)=> {
    res.status(200).send(teas_list);
})

app.get("/teas/:id" , (req,res)=> {
    const tea = teas_list.find(t => t.id === parseInt(req.params.id));
    if (!tea) return res.status(404).send("Tea not found");
    res.status(200).send(tea);
})


// Update a tea : put method
app.put("/teas/:id" ,(req,res)=> {
    logger.info("Recieved a Request to update a tea");
    const tea = teas_list.find(t => t.id ===parseInt(req.params.id));
    if(!tea) return res.status(404).send("Tea Not Found");

    const {name ,price} = req.body;
    tea.name = name;
    tea.price = price;
    return res.status(200).send(tea);
})
// Delete a tea : delete method
app.delete("/teas/:id" , (req,res)=> {
    logger.info("Recieved a request to delete a tea");
    const tea_index = teas_list.find(t => t.id ===parseInt(req.params.id))

    if(tea_index == -1) return res.status(404).send({message : "Tea Id Not Found"});
    teas_list.splice(tea_index,1);
    return res.status(204).send("Tea  Deleted Successfully");

})



app.listen(PORT , ()=> {console.log(`Server is running on port ${PORT}`)});