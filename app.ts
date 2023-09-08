import express from 'express'
import bodyParser from 'body-parser';
const homeRouter = require('./src/routes/home.routes');
const playerRouter = require('./src/routes/user.routes');

const app = express()

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/', homeRouter);
app.use('/player', playerRouter);

export { app }