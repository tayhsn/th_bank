import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import ContaQuery from './queries/conta.query.js';
import ContaMutation from './mutations/conta.mutation.js';

const Schema = new GraphQLSchema({
	types: null,
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			...ContaQuery,
		},
	}),
	mutation: new GraphQLObjectType({
		name: 'RootMutation',
		fields: {
			...ContaMutation,
		},
	}),
});

export default Schema;
