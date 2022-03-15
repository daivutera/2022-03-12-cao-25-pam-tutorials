const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');
const tutorialsRouter = require('./routes/tutorialsRouter');

// const mysql = require('mysql2/promise');
// const dbConfig = require('./dbConfig');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/', usersRouter);
app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/', tutorialsRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
