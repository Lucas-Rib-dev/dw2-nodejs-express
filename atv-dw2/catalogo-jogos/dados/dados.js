const jogos = [
    {
        nome: 'Minecraft',
        ano: 2011,
        classificacao: 'Livre'
    },
    {
        nome: 'The Legend of Zelda: Breath of the Wild',
        ano: 2017,
        classificacao: '10 anos'
    },
    {
        nome: 'God of War',
        ano: 2018,
        classificacao: '18 anos'
    },
    {
        nome: 'Super Mario Odyssey',
        ano: 2017,
        classificacao: 'Livre'
    },
    {
        nome: 'Red Dead Redemption 2',
        ano: 2018,
        classificacao: '18 anos'
    }
];

const plataformas = [
    {
        nome: 'PlayStation 5',
        empresa: 'Sony',
        lancamento: 2020
    },
    {
        nome: 'Xbox Series X',
        empresa: 'Microsoft',
        lancamento: 2020
    },
    {
        nome: 'Nintendo Switch',
        empresa: 'Nintendo',
        lancamento: 2017
    },
    {
        nome: 'PC',
        empresa: 'Diversas empresas',
        lancamento: 1981
    },
    {
        nome: 'PlayStation 4',
        empresa: 'Sony',
        lancamento: 2013
    }
];

const generos = [
    {
        nome: 'Ação',
        descricao: 'Jogos focados em combates, desafios e movimentos rápidos.'
    },
    {
        nome: 'Aventura',
        descricao: 'Jogos que exploram histórias, mundos e desafios.'
    },
    {
        nome: 'RPG',
        descricao: 'Jogos em que o jogador controla e desenvolve personagens.'
    },
    {
        nome: 'Esportes',
        descricao: 'Jogos baseados em diferentes modalidades esportivas.'
    },
    {
        nome: 'Corrida',
        descricao: 'Jogos baseados em competições de velocidade e veículos.'
    }
];

module.exports = {
    jogos,
    plataformas,
    generos
};
