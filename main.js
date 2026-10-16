const config = require('./config');

console.log('Configurações carregadas com sucesso!');

console.log('Porta:', config.app.port);
console.log('Ambiente:', config.app.ambiente);

console.log('Banco:', config.db.host);
console.log('Porta do banco:', config.db.port);

console.log('API de pagamento: ********');
console.log('JWT Secret: ********');