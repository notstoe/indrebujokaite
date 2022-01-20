import { endpoint, prodEndpoint } from '../config';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const apollo = new ApolloClient({
	uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
	cache: new InMemoryCache(),
});

export default apollo;
