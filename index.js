import express from 'express';
import data from './store';
import cors from 'cors';

const app = express(); // instanciranje aplikacije
const port = 3000; // port na kojem će web server slušati

app.use(cors());
app.use(express.json());

//ime aplikacije
app.get('/podaci', (req, res) => res.json(data.podaci));

//vjezbe
app.get('/vjezbe', (req, res) => res.json(data.vjezbe));

//pojedine vjezbe
app.get('/vjezbe/:arms', (req, res) => res.json(data.vjezbe));
app.get('/vjezbe/:legs', (req, res) => res.json(data.vjezbe));
app.get('/vjezbe/:abs', (req, res) => res.json(data.vjezbe));
app.get('/vjezbe/:back', (req, res) => res.json(data.vjezbe));

app.listen(port, () => console.log(`Port: ${port}`));