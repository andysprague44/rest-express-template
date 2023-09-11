import express from 'express'
import bodyParser from 'body-parser';
const playerRouter = require('./src/routes/player.routes');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));

app.get('/', (req, res) => { res.send('Hello, this is your homepage speaking'); });

//Use this pattern to split out an endpoint per file
app.use('/players', playerRouter);

export { app }