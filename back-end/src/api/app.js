const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/productRoutes');
const loginRouter = require('./routes/loginRoutes');
const registerRouter = require('./routes/registerRoutes');
const saleRouter = require('./routes/saleRoutes');

const app = express();
app.use(express.json());

app.use(cors());
app.use(express.static('public'));

app.use('/products', productRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/orders', saleRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
