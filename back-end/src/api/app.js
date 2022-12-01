const express = require('express');
const cors = require('cors');
const errorMiddleware = require('../middlewares/error.middleware');
const routes = require('../routes/routes');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(routes);
app.use(errorMiddleware);

module.exports = app;
