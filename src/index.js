import express from 'express';
import router from './routes/router.js';
import Schema from './schema/index.js';
import { graphqlHTTP } from 'express-graphql';

const app = express();
const port = process.env.PORT || 3000;

app.use(
	'/graphql',
	graphqlHTTP({
		schema: Schema,
		graphiql: true,
	}),
);

app.use(express.json());
app.use('/', router);

app.listen(port, () => console.log('Servidor rodando..'));
