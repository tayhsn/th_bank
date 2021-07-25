import repository from '../repositories/repository.js';

async function getSaldo(conta) {
	return await repository.getSaldo(conta);
}

async function sacar(conta, valor) {
	return await repository.sacar(conta, valor);
}

async function depositar(conta, valor) {
	return await repository.depositar(conta, valor);
}

export default { getSaldo, sacar, depositar };
