module.exports = function (app) {
    var PainelController = {
        painel: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('painel/index', params);
        },
        cadastroUsuario: function(request, response){
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('painel/novo-usuario', params);
        },
        cadastroEvento: function(request, response){
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('painel/novo-evento', params);
        },
        listaEventos: function(request, response){
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('painel/lista-eventos', params);
        },
        novoUsuario: function(request, response){
            response.redirect('/painel');
        }
    };
    return PainelController;
};