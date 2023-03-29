const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/login', userRouter);
app.get('/coffee', (_req, res) => res.status(418).end());
