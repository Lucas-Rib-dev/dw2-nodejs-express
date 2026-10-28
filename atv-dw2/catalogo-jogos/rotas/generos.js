const express = require('express');
const router = express.Router();

const { generos } = require('../dados/dados');

router.get('/', (req, res) => {
    res.render('generos', {
        generos: generos
    });
});

module.exports = router;
