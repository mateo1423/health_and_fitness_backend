import express from 'express';
import data from '../store';
import cors from 'cors';

const app = express(); // instanciranje aplikacije
const port = 3000; // port na kojem će web server slušati

app.use(cors());
app.use(express.json());


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

app.listen(port, () => console.log(`Port: ${port}`));