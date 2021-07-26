import { Contas } from '../models/conta.js';

async function getContas() {
	return await Contas.findAll();
}

async function getConta(conta) {
	const AllContas = await getContas();
	const dadosConta = AllContas.find((acc) => acc.conta === parseInt(conta));
	return dadosConta;
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

function sacar(conta, valor) {
	const sacar = new Promise((resolve, reject) => {
		getConta(conta).then((dados) => {
			if (dados) {
				if (dados.dataValues.saldo >= valor) {
					dados.decrement('saldo', { by: valor });
					resolve(dados);
				} else {
					reject('Saldo insuficiente');
				}
			}
			reject('Conta não encontrada.');
		});
	});
	return sacar;
}

function depositar(conta, valor) {
	const depositar = new Promise((resolve, reject) => {
		getConta(conta).then((dados) => {
			if (dados) {
				dados.increment('saldo', { by: valor });
				resolve(dados);
			}
			reject('Conta não encontrada.');
		});
	});
	return depositar;
}

export default { getSaldo, sacar, depositar };
