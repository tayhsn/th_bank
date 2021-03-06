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

function sacar(req, res) {
	try {
		let conta = req.body.conta;
		let valor = req.body.valor;

		if (!conta || !valor) {
			res.send('Por favor, informe conta e valor do saque.');
		}

		service
			.sacar(conta, valor)
			.then((dados) => res.send(dados))
			.catch((e) => res.send(e));
	} catch (err) {
		console.log(err);
	}
}

function depositar(req, res) {
	try {
		let conta = req.body.conta;
		let valor = req.body.valor;

		if (!conta || !valor) {
			res.send('Por favor, informe conta e valor do depósito.');
		}

		service
			.depositar(conta, valor)
			.then((dados) => res.send(dados))
			.catch((e) => res.send(e));
	} catch (err) {
		console.log(err);
	}
}

export default { getSaldo, sacar, depositar };
