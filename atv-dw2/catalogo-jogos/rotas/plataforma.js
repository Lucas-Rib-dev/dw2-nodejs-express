const express = require('express');
const router = express.Router();

const { plataformas } = require('../dados/dados');

router.get('/', (req, res) => {
    res.render('plataformas', {
        plataformas: plataformas
    });
});

module.exports = router;
