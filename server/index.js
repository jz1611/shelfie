require('dotenv').config();
const express = require('express');
const massive = require('massive');

const app = express();

const { CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);
});

app.use(express.json());

const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}...`));