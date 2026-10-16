require (`dotenv`).config();

const obrigatorias = ['PAYMENT_API_KEY', 'JWT_SECRET'];

const faltando = obrigatorias.filter(chave => !process.env[chave]);

if (faltando.length > 0) {
    console.error('Erro! Variáveis obrigatórias ausentes:');
    console.error(faltando.join(', '));
    process.exit(1);
}
const config = {
    app: {
        port: process.env.PORT || 8080,
        ambiente: process.env.NODE_ENV || 'development'
    },

    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    },

    auth: {
        paymentKey: process.env.PAYMENT_API_KEY,
        jwtSecret: process.env.JWT_SECRET
    }
};

module.exports = config;