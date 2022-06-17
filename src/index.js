import express from 'express';
import cors from 'cors';
import data from './store'
import connect from './db.js';
import mongo from 'mongodb';

import dotenv from "dotenv"
dotenv.config();

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())



//ime aplikacije


//vjezbe


//pojedine vjezbe


app.post('/arms', async (req, res) => {
  let db = await connect();
 
  let cursor = await db.collection('arms').find();
  let result = await cursor.tooArray()
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  res.json(result)
 
  })





app.listen(port, () => console.log(`Slušam na portu ${port}!`));