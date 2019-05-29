const express = require('express');
const router = express.Router();

router.get('/product', (request, response) => {
    console.log('list of products');
});



module.exports = router;