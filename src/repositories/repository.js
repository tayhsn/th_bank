import { Contas } from '../models/conta.js';

async function getConta(conta) {
	const contas = await Contas.findAll();
	const Conta = contas.find((acc) => acc.conta === conta);
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
				Conta.decrement('saldo', { by: valor });
				return await getConta(Conta);
			} else {
				return 'Saldo insuficiente';
			}
		}
		return 'Conta não encontrada.';
	} catch (error) {
		console.log(error);
	}
}

async function depositar(conta, valor) {
	try {
		const Conta = await getConta(conta);
		if (Conta) {
			Conta.increment('saldo', { by: valor });
			return await getConta(Conta);
		}
		return 'Conta não encontrada.';
	} catch (error) {
		console.log(error);
	}
}

export default { getSaldo, sacar, depositar };
