const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const Transactions = require("./routes/Transactions");
const connectDB = require("./config/db");

dotenv.config({path: "./config/config.env"});
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/v1/transactions', Transactions);

app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold));