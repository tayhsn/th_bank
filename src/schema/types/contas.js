import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLFloat,
} from 'graphql';

const Contas = new GraphQLObjectType({
	name: 'Contas',
	fields: () => ({
		id: {
			type: GraphQLInt,
		},
		nome: {
			type: GraphQLString,
		},
		conta: {
			type: GraphQLInt,
		},
		saldo: {
			type: GraphQLFloat,
		},
	}),
});

export default Contas;
