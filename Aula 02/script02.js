var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});

	res.write('<html>');
	res.write('<head>');
	res.write('<title>Aula de Node</title>');
	res.write('</head>');
	res.write('<body>');
	res.write('<h2>Desenvolvimento de Aplicações Web</h2>');
	res.write('</body>');
	res.write('</html>');

	res.end();
}).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');