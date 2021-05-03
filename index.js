import express from 'express';
import data from './store';
import cors from 'cors';

const app = express(); // instanciranje aplikacije
const port = 3200; // port na kojem će web server slušati

app.use(cors());
app.use(express.json());

//ime aplikacije
app.get('/podaci', (req, res) => res.json(data.podaci));

//vjezbe
app.get('/vjezbe', (req, res) => res.json(data.vjezbe));

//pojedine vjezbe
app.get('/vjezbe/:ruke', (req, res) => res.json(data.vjezbe));
app.get('/vjezbe/:noge', (req, res) => res.json(data.vjezbe));
app.get('/vjezbe/:prsa', (req, res) => res.json(data.vjezbe));
app.get('/vjezbe/:leda', (req, res) => res.json(data.vjezbe));
app.get('/vjezbe/:core', (req, res) => res.json(data.vjezbe));
app.get('/vjezbe/:ramena', (req, res) => res.json(data.vjezbe));

app.listen(port, () => console.log(`Port: ${port}`));