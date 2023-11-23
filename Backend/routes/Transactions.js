const express = require('express');
const route = express.Router();
const { getTransactions, postTransaction, deleteTransaction } = require("../controllers/Transactions");

route
    .route('/')
    .get(getTransactions)
    .post(postTransaction);

route
    .route('/:id')
    .delete(deleteTransaction);

module.exports = route;