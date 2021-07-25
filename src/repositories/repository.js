import { Contas } from '../models/conta.js';

async function getConta(conta) {
	const contas = await Contas.findAll();
	const Conta = contas.find((acc) => acc.conta === parseInt(conta));
	return Conta;
}

async function getSaldo(conta) {
	try {
		const Conta = await getConta(conta);
		if (Conta) {
			return Conta;
		}
		return 'Conta não encontrada.';
	} catch (error) {
		console.log(error);
	}
}

async function sacar(conta, valor) {
	try {
		const Conta = await getConta(conta);
		if (Conta) {
			if (Conta.saldo >= valor) {
				return await Conta.decrement('saldo', { by: valor });
			} else {
				return 'Saldo insuficiente';
			}
		}
		res.send('Conta não encontrada.');
	} catch (error) {
		console.log(error);
	}
}

async function depositar(conta, valor) {
	try {
		const Conta = await getConta(conta);
		if (Conta) {
			return await Conta.increment('saldo', { by: valor });
		}
		return 'Conta não encontrada.';
	} catch (error) {
		console.log(error);
	}
}

export default { getSaldo, sacar, depositar };
