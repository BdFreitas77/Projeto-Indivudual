var express = require('express');
var router = express.Router();
var Curso = require('../models').Curso;
// var sequelize = require('../models').sequelize;
// var Usuario = require('../models').Usuario;

router.post('/enviar_curso', function (req, res, next) {
    console.log('Criando um usuário');

    Curso.create({
        email_curso: req.body.email_curso,
        ytb: req.body.ytb,
        pdf: req.body.pdf,
        insta: req.body.insta,
        iniciante: req.body.iniciante
    }).then(resultado => {
        console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    });
});


module.exports = router;