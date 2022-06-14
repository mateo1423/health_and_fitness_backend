import express from 'express';
import cors from 'cors';
import data from '../store'
import connect from './db.js';
import mongo from 'mongodb'
import auth from './auth.js';
import dotenv from "dotenv"
dotenv.config();

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.listen(port, () => console.log(`slusam na portu ${port}`))


//ime aplikacije
app.get('/podaci', (req, res) => res.json(data.podaci));

//vjezbe
app.get('/vjezbe', (req, res) => res.json(data.Vjezbe));

//pojedine vjezbe
app.get('/Vjezbe/legs', (req, res) => res.json(data.Vjezbe.legs));
app.get('/Vjezbe/arms', (req, res) => res.json(data.Vjezbe.arms));
app.get('/Vjezbe/abs', (req, res) => res.json(data.Vjezbe.abs));
app.get('/Vjezbe/back', (req, res) => res.json(data.Vjezbe.back));
app.get('/Vjezbe/chest', (req, res) => res.json(data.Vjezbe.chest));

app.get('/vjezbe/:id', [auth.verify], async(req, res) =>{ //dohvat jedne ocjene preko :id
    let {id} = req.params
    let db = await connect()
    let ocjena = await db.collection("vjezbe").findOne({_id: mongo.ObjectId(id)})
    res.json(ocjena)
})

app.listen(port, () => console.log(`Port: ${port}`));