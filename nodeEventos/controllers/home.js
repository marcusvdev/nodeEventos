module.exports = function(app){
    var HomeController = {
        // Action index
        index: function(req, res){
            res.render('home/index');
        },
        login: function(request, response){
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;
            
            if (nome == 'admin' && senha == 'admin') {
                var usuario = request.body.usuario;
                request.session.usuario = usuario;
                response.redirect('/painel');
            } else {
                var error = { msg : "Usuário ou senha inválidos"};
                response.render('home/index', error);
                response.redirect('/');
            }
        },
        logout: function(request, response){
            request.session.destroy();
            response.redirect('/');
        },
        cadastroUsuario: function(request, response){
        },
        novoUsuario: function (request, response) {
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;
            var confirma = request.body.usuario.confirma;
            response.redirect('/painel');
        },
    };
    return HomeController;
};