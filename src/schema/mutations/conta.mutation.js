import Contas from '../types/contas.js';
import ContaInput from '../types/contaInput.js';
import service from '../../services/service.js';

const contaMutation = {
	sacar: {
		type: Contas,
		args: {
			conta: {
				name: 'conta',
				type: ContaInput,
			},
		},
		resolve(_, args) {
			return service.sacar(args.conta);
		},
	},
	depositar: {
		type: Contas,
		args: {
			conta: {
				name: 'conta',
				type: ContaInput,
			},
		},
		resolve(_, args) {
			return service.depositar(args.conta);
		},
	},
};

export default contaMutation;
