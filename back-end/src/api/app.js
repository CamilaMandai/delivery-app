const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/productRoutes');
const loginRouter = require('./routes/loginRoutes');
const registerRouter = require('./routes/registerRoutes');
const saleRouter = require('./routes/saleRoutes');
const adminRouter = require('./routes/adminRoutes');
const saleProductRouter = require('./routes/saleProductRoutes');

const app = express();
app.use(express.json());

app.use(cors());
app.use(express.static('public'));

app.use('/products', productRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/saleproducts', saleProductRouter);
app.use('/orders', saleRouter);
app.use('/admin/manage', adminRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
