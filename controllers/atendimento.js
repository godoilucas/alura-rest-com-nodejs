const Atendimento = require('../models/atendimento');

module.exports = app => {
    app.route('/atendimentos')
        .get((req, res) => {
            Atendimento.lista(res);
        })
        .post((req, res) => {
            const atendimento = req.body;
            Atendimento.adiciona(atendimento, res);
            //res.send('Vocês está na rota de atendimento e está realizando um POST')
        });

    app.route('/atendimentos/:id')
        .get((req, res) => {
            const id = parseInt(req.params.id);
            Atendimento.buscaPorId(id, res);
        })
        .patch((req,res) => {
            const id = parseInt(req.params.id);
            const valores = req.body;

            Atendimento.atualiza(id, valores, res);
        })
        .delete((req, res) => {
            const id = parseInt(req.params.id);

            Atendimento.deleta(id, res);
        });
}

