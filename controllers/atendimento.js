module.exports = app => {
    app.route('/atendimento')
        .get((req, res) => res.send('Vocês está na rota de atendimento e está realizando um GET'))
        .post((req, res) => {
            console.log(req.body);
            res.send('Vocês está na rota de atendimento e está realizando um POST')
        });
}

