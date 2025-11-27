import express from 'express'
import {insertData, getData, updateData , deleteData} from "./Controllers/projects.js"
import {insertContact} from "./Controllers/contactController.js"
import connectDB from './utils/mongoDB.js';
import 'dotenv/config';
import { setCors } from './utils/corsHandler.js';

const app = new express();
app.use(express.json());


let isConnected = false;

app.use((req, res, next) => {
    if(!isConnected) {
        connectDB();
    }
    next();
});

app.get("/projects",(req,res) => {if (!setCors(req, res)) return; getData(req,res)})
app.post("/projects", (req, res) => { if (!setCors(req, res)) return; insertData(req, res)})
app.put("/project/:id", (req, res)=> { if (!setCors(req, res)) return; updateData(req, res)})
app.delete("/project/:id", (req, res)=> { if (!setCors(req, res)) return; deleteData(req, res)})

app.post("/contact", (req,res)=> {if(!setCors(req, res)) return; insertContact(req, res)})

// app.listen(5000, ()=> {
//     console.log("server is listening at port : ", 5000) 
// })

module.exports = app