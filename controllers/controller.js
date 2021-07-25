import service from '../services/service.js';

async function getSaldo(req, res) {
	try {
		let conta = req.params.conta;

		if (conta === null) {
			res.send('Por favor, informe conta para verificar o saldo.');
		}

		conta = await service.getSaldo(conta);
		res.send(conta);
	} catch (err) {
		console.log(err);
	}
}

async function sacar(req, res) {
	try {
		let conta = req.body.conta;
		let valor = req.body.valor;

		if (!conta || !valor) {
			res.send('Por favor, informe conta e valor do saque.');
		}

		let dados = await service.sacar(conta, valor);
		res.send(dados);
	} catch (err) {
		console.log(err);
	}
}

async function depositar(req, res) {
	try {
		let conta = req.body.conta;
		let valor = req.body.valor;

		if (!conta || !valor) {
			res.send('Por favor, informe conta e valor do depósito.');
		}

		let dados = await service.depositar(conta, valor);
		res.send(dados);
	} catch (err) {
		console.log(err);
	}
}

export default { getSaldo, sacar, depositar };
