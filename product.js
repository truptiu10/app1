const express = require('express');
const router = express.Router();

router.get('/product', (request, response) => {
    console.log('list of products');
});

router.post('/product', (request, response) => {
    console.log('add products');
});


module.exports = router;