// configs for the apollo client

import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { createUploadLink } from "apollo-upload-client";
import withApollo from "next-with-apollo";
import { endpoint, prodEndpoint } from "../config";

import { NextPage } from "next";

type withDataProps = {
	initialState?: any;
	headers?: any;
};

// creates apollo client
function withData({ headers, initialState }: withDataProps): ApolloClient<any> {
	return new ApolloClient({
		link: ApolloLink.from([
			onError(({ graphQLErrors, networkError }) => {
				if (graphQLErrors)
					graphQLErrors.forEach(({ message, locations, path }) =>
						console.log(
							`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
						)
					);
				if (networkError)
					console.log(
						`[Network error]: ${networkError}. Backend is unreachable. Is it running?`
					);
			}),
			createUploadLink({
				uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
				fetchOptions: {
					credentials: "include",
				},
				// This enables SSR with logged in state
				headers,
			}),
		]),
		cache: new InMemoryCache().restore(initialState || {}), // if there is an initial state, restore it, otherwise nah
	});
}

// 'withApollo' package will crawl all queries (it'll go into all components looking for queries),
// it'll fetch all that data and it will make sure that all data is fetched before the html is sent from server to client-side

export default withApollo(withData, { getDataFromTree });
