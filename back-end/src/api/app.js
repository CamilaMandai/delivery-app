const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

const app = express();
app.use(express.json());

app.use(cors());
app.use(express.static('public'));

app.use('/login', userRouter);
app.use('/products', productRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
