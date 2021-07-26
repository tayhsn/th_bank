import { GraphQLInputObjectType, GraphQLInt, GraphQLFloat } from 'graphql';

const ContaInput = new GraphQLInputObjectType({
	name: 'ContaInput',
	fields: () => ({
		conta: {
			type: GraphQLInt,
		},
		valor: {
			type: GraphQLFloat,
		},
	}),
});

export default ContaInput;
