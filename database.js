import Sequelize from 'sequelize';

// conectando ao banco
export const sequelize = new Sequelize('banco', 'root', 'tayann3', {
	host: 'localhost',
	dialect: 'mysql',
});

// verifica se conectou
// sequelize
// 	.authenticate()
// 	.then(() => console.log('Conectado com sucesso..'))
// 	.catch((error) => console.log('Erro:' + error));
