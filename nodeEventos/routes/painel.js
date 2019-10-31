module.exports = function (app) {
    var valida = require('./../middlewares/valida');
    var painel = app.controllers.painel;
    app.get('/painel', valida, painel.painel);
    app.get('/novo-usuario', valida, painel.cadastroUsuario);
    app.get('/novo-evento', valida, painel.cadastroEvento);
    app.get('/lista-eventos', valida, painel.listaEventos);
    app.post('/novo-usuario', painel.novoUsuario);
}