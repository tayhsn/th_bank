import { sequelize } from '../database/database.js';
import Sequelize from 'sequelize';

// cria a tabela
export const Contas = sequelize.define('contas', {
	nome: {
		type: Sequelize.STRING,
	},
	conta: {
		type: Sequelize.INTEGER,
	},
	saldo: {
		type: Sequelize.DECIMAL,
	},
});

//força a criação caso ainda não exista
// Contas.sync({ force: true });

//popula a tabela
// Contas.create({
// 	nome: 'Adilson',
// 	conta: 789,
// 	saldo: 5000.0,
// });
