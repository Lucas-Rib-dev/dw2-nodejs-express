const express = require('express');
const router = express.Router();

const { jogos } = require('../dados/dados');

router.get('/', (req, res) => {
    res.render('jogos', {
        jogos: jogos
    });
});

module.exports = router;
