const express = require('express');
const router = express.Router();

router.get('/category', (request, response) => {
    console.log('list of category');
});

router.post('/category', (request, response) => {
    console.log('list of category');
});


module.exports = router;