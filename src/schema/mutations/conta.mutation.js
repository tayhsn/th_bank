import Conta from '../types/contas.js';
import ContaInput from '../types/contaInput.js';
import service from '../../services/service.js';

const contaMutation = {
	sacar: {
		type: Conta,
		args: {
			conta: {
				nome: 'conta',
				type: ContaInput,
			},
		},
		resolve(_, args) {
			return service.sacar(args.conta);
		},
	},
	depositar: {
		type: Conta,
		args: {
			conta: {
				nome: 'conta',
				type: ContaInput,
			},
		},
		resolve(_, args) {
			return service.depositar(args.conta);
		},
	},
};

export default contaMutation;
