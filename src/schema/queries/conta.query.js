import Conta from '../types/contas.js';
import service from '../../services/service.js';
import { GraphQLInt } from 'graphql';

const contaQuery = {
	saldo: {
		type: Conta,
		args: {
			conta: {
				name: 'saldo',
				type: GraphQLInt,
			},
		},
		resolve: (_, args) => service.getSaldo(args.conta),
	},
};

export default contaQuery;
