require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');

const app = express();

const { CONNECTION_STRING, PORT } = process.env;

massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);
  console.log('Database connected.');
});

app.use(express.json());

app.get('/api/inventory', controller.getInventory);
app.post('/api/product', controller.postProduct);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));