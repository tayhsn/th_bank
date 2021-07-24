import { Contas } from '../models/conta.js';

async function getSaldo(conta) {
	try {
		const contas = await Contas.findAll();
		const Conta = contas.find((acc) => acc.conta === parseInt(conta));
		if (conta) {
			return Conta;
		}
		throw new Error('Conta não encontrada.');
	} catch (error) {
		console.log(error);
	}
}

async function sacar(conta, valor) {}

async function depositar(conta, valor) {}

export default { getSaldo, sacar, depositar };
