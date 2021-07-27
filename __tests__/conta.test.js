require('mysql2/node_modules/iconv-lite').encodingExists('foo');
import { sequelize } from '../src/database/database';
import repository from '../src/repositories/repository';
import contas from './mock.js';

beforeAll((done) => {
	done();
});

// saldo
describe('Balance', () => {
	//receber saldo de conta valida
	it('should be able to receive balance with an existing account', () => {
		const conta = 123;

		repository
			.getSaldo(conta)
			.then((dados) => {
				expect(dados).toBe(contas[0]);
			})
			.catch((e) => console.log(e));
	});

	//receber saldo de conta invalida
	it('should not be able to receive balance if it is an inexisting account', () => {
		const conta = 13;

		repository
			.getSaldo(conta)
			.then((dados) => {
				expect(dados).toBe('Conta não encontrada.');
			})
			.catch((e) => console.log(e));
	});
});

//sacar
describe('Withdraw', () => {
	//sacar de uma conta valida com saldo suficiente
	it('should be able to withdraw money from an existing account with enough money in it', () => {
		const conta = 456;
		const valor = 400;

		repository
			.sacar(conta, valor)
			.then((dados) => {
				expect(dados).toBe(contas[1]);
			})
			.catch((e) => console.log(e));
	});

	// sacar de uma conta valida com saldo insuficiente
	test('should not be able to withdraw money if it have not enough balance', () => {
		const conta = 123;
		const valor = 400;

		repository
			.sacar(conta, valor)
			.then((dados) => {
				expect(dados).toBe('Saldo insuficiente');
			})
			.catch((e) => console.log(e));
	});

	//sacar de uma conta que não existe
	test('should not be able to withdraw money if it is an inexisting account', () => {
		const conta = 13;
		const valor = 400;

		repository
			.sacar(conta, valor)
			.then((dados) => {
				expect(dados).toBe('Conta não encontrada.');
			})
			.catch((e) => console.log(e));
	});
});

//depositar
describe('Deposit', () => {
	//sacar de uma conta valida com saldo suficiente
	test('should be able to deposit money in an existing account', () => {
		const conta = 123;
		const valor = 400;

		repository
			.depositar(conta, valor)
			.then((dados) => {
				expect(dados).toBe(contas[3]);
			})
			.catch((e) => console.log(e));
	});

	//depositar em uma conta que não existe
	test('should not be able to deposit money if it is an invalid account', () => {
		const conta = 13;
		const valor = 400;

		repository
			.depositar(conta, valor)
			.then((dados) => {
				expect(dados).toBe('Conta não encontrada.');
			})
			.catch((e) => console.log(e));
	});
});

afterAll((done) => {
	sequelize.close();
	done();
});
