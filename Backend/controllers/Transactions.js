// @desc    Get all transactions
// route    GET /api/v1/transactions
// access   public
exports.getTransactions = (req, res) => {
    res.send('Get transactions');
};


// @desc    Add a transaction
// route    POST /api/v1/transactions
// access   public
exports.postTransaction = (req, res) => {
    res.send('Post transaction');
};


// @desc    Delete a transactions
// route    DELETE /api/v1/transactions
// access   public
exports.deleteTransaction = (req, res) => {
    res.send('Delete transaction');
};


