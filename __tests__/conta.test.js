import repository from '../src/repositories/repository';

describe('Account', () => {
	it('should not receive balance if account does not exists', () => {
		expect(repository.getSaldo(456)).toBe({
			id: 2,
			nome: 'Hanna',
			conta: 456,
			saldo: '1000',
			createdAt: '2021-07-24T17:37:36.000Z',
			updatedAt: '2021-07-24T17:37:36.000Z',
		});
	});
});
