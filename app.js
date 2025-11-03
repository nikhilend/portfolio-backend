import express from 'express'
import projects from './Data/Projects.js'
import {insertData, getData, updateData} from "./Controllers/projects.js"
import {insertContact} from "./Controllers/contactController.js"
import connectDB from './utils/mongoDB.js';
import 'dotenv/config';

const app = new express();
app.use(express.json());

let isConnected = false;

app.use((req, res, next) => {
    if(!isConnected) {
        connectDB();
    }
    next();
});

app.get("/projects",(req,res) => { getData(req,res)})
app.post("/projects", (req, res) => {insertData(projects, req, res)})
app.put("/project/:id", (req, res)=> { updateData(req, res)})
app.delete("/project/:id", (req, res)=> { deleteData(req, res)})

app.post("contact", (req,res)=> insertContact(req, res))

app.listen(5000, ()=> {
    console.log("server is listening at port : ", 5000)
})

// module.exports = app