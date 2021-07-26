import repository from '../src/repositories/repository';

// saldo
describe('Balance', () => {
	//receber saldo de conta valida
	test('should be able to receive balance with an existing account', () => {
		const conta = 123;

		repository.getSaldo(conta).then((dados) => {
			expect(dados).toBe({
				id: 1,
				nome: 'Tayanne',
				conta: 123,
				saldo: '10700',
				createdAt: '2021-07-24T17:37:05.000Z',
				updatedAt: '2021-07-26T20:18:08.000Z',
			});
		});
	});

	//receber saldo de conta invalida
	test('should not be able to receive balance if it is an inexisting account', () => {
		const conta = 13;

		repository.getSaldo(conta).then((dados) => {
			expect(dados).toBe('Conta não encontrada.');
		});
	});
});

//sacar
describe('Withdraw', () => {
	//sacar de uma conta valida com saldo suficiente
	test('should be able to withdraw money from an existing account with enough money in it', () => {
		const conta = 123;
		const valor = 400;

		repository.sacar(conta, valor).then((dados) => {
			expect(dados).toBe({
				id: 1,
				nome: 'Tayanne',
				conta: 123,
				saldo: '10700',
				createdAt: '2021-07-24T17:37:05.000Z',
				updatedAt: '2021-07-26T20:18:08.000Z',
			});
		});
	});

	// sacar de uma conta valida com saldo insuficiente
	test('should not be able to withdraw money if it have not enough balance', () => {
		const conta = 123;
		const valor = 400;

		repository.sacar(conta, valor).then((dados) => {
			expect(dados).toBe('Saldo insuficiente');
		});
	});

	//sacar de uma conta que não existe
	test('should not be able to withdraw money if it is an inexisting account', () => {
		const conta = 13;
		const valor = 400;

		repository.sacar(conta, valor).then((dados) => {
			expect(dados).toBe('Conta não encontrada.');
		});
	});
});

//depositar
describe('Deposit', () => {
	//sacar de uma conta valida com saldo suficiente
	test('should be able to deposit money in an existing account', () => {
		const conta = 123;
		const valor = 400;

		repository.depositar(conta, valor).then((dados) => {
			expect(dados).toBe({
				id: 1,
				nome: 'Tayanne',
				conta: 123,
				saldo: '10700',
				createdAt: '2021-07-24T17:37:05.000Z',
				updatedAt: '2021-07-26T20:18:08.000Z',
			});
		});
	});

	//depositar em uma conta que não existe
	test('should not be able to deposit money if it is an invalid account', () => {
		const conta = 13;
		const valor = 400;

		repository.depositar(conta, valor).then((dados) => {
			expect(dados).toBe('Conta não encontrada.');
		});
	});
});
