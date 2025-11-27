import express from 'express'
import {insertData, getData, updateData , deleteData} from "./Controllers/projects.js"
import {insertContact} from "./Controllers/contactController.js"
import connectDB from './utils/mongoDB.js';
import 'dotenv/config';
import cors from 'cors'

const app = new express();

app.use(cors({
  origin: ["http://localhost:5173", "https://react-portfolio-seven-beryl.vercel.app/"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

let isConnected = false;

app.use((req, res, next) => {
    if(!isConnected) {
        connectDB();
    }
    next();
});

app.get("/projects",(req,res) => { getData(req,res)})
app.post("/projects", (req, res) => {insertData(req, res)})
app.put("/project/:id", (req, res)=> { updateData(req, res)})
app.delete("/project/:id", (req, res)=> { deleteData(req, res)})

app.post("/contact", (req,res)=> insertContact(req, res))

// app.listen(5000, ()=> {
//     console.log("server is listening at port : ", 5000)
// })

module.exports = app