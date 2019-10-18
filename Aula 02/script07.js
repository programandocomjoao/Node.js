var http = require('http');

var modelo = 'Grand Siena';
var marca = 'Fiat';
var cor = 'Vermelho';
var ano = 2013;
var motor = 1.4;

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});

	res.write('<html>');
	res.write('<head>');
	res.write('<title>Cadastro de Veículos</title>');
	res.write('</head>');
	res.write('<body>');
	res.write('<h2>Cadastro de Veículos</h2>');
	res.write('<p>');
	res.write('Modelo: ' + modelo + '<br>');
	res.write('Marca: ' + marca + '<br>');
	res.write('Cor: ' + cor + '<br>');
	res.write('Ano: ' + ano + '<br>');
	res.write('Motor: ' + motor);
	res.write('</p>');
	res.write('</body>');
	res.write('</html>');

	res.end();
}).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');