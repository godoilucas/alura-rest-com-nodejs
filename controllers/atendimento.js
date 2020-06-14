const Atendimento = require('../models/atendimento');

module.exports = app => {
    app.route('/atendimento')
        .get((req, res) => res.send('Vocês está na rota de atendimento e está realizando um GET'))
        .post((req, res) => {
            const atendimento = req.body;
            Atendimento.adiciona(atendimento);
            res.send('Vocês está na rota de atendimento e está realizando um POST')
        });
}

