// configs for the apollo client

import {
	ApolloClient,
	ApolloLink,
	createHttpLink,
	InMemoryCache,
} from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr';
import withApollo from 'next-with-apollo';
import { endpoint, prodEndpoint } from '../config';

type withDataProps = {
	initialState?: any;
};

function withData({ initialState }: withDataProps): ApolloClient<any> {
	return new ApolloClient({
		link: ApolloLink.from([
			createHttpLink({
				uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
				fetchOptions: {
					credentials: 'omit',
				},
			}),
		]),
		cache: new InMemoryCache().restore(initialState || {}),
	});
}

export default withApollo(withData, { getDataFromTree });
