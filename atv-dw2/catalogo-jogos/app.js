const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Importando as rotas
const jogosRouter = require('./rotas/jogos');
const plataformasRouter = require('./rotas/plataformas');
const generosRouter = require('./rotas/generos');

// Página inicial
app.get('/', (req, res) => {
    res.render('index');
});

// Rotas das categorias
app.use('/jogos', jogosRouter);
app.use('/plataformas', plataformasRouter);
app.use('/generos', generosRouter);

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando em http://localhost:${PORT}`);
});
