// TODO - configure apollo client
// installed - apollo-link-http, next-with-apollo, @apollo/client

// import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
// import { onError } from "@apollo/link-error";
// import { getDataFromTree } from "@apollo/client/react/ssr";
// // this apollo-upload-client handles uploading a file (there's not a standard for uploading files on GraphQL)
// import { createUploadLink } from "apollo-upload-client";
// import withApollo from "next-with-apollo";
// import { endpoint, prodEndpoint } from "../config";

// function createClient({ headers, initialState }) {
// 	return new ApolloClient({
// 		link: ApolloLink.from([
// 			onError(({ graphQLErrors, networkError }) => {
// 				if (graphQLErrors)
// 					graphQLErrors.forEach(({ message, locations, path }) =>
// 						console.log(
// 							`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
// 						)
// 					);
// 				if (networkError)
// 					console.log(
// 						`[Network error]: ${networkError}. Backend is unreachable. Is it running?`
// 					);
// 			}),
// 			// this uses apollo-link-http under the hood, so all the options here come from that package
// 			createUploadLink({
// 				uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
// 				fetchOptions: {
// 					credentials: "include",
// 				},
// 				// pass the headers along from this request. This enables SSR with logged in state
// 				headers,
// 			}),
// 		]),
// 		cache: new InMemoryCache({
// 			typePolicies: {
// 				Query: {
// 					fields: {
// 						// TODO: We will add this together!
// 						// allProducts: paginationField(),
// 					},
// 				},
// 			},
// 		}).restore(initialState || {}), // if there is initial state, restore it, otherwise nah
// 	});
// }

// // 'withApollo' package will crawl all queries from the site (it'll go into all components looking for queries),
// // it will fetch all that data and it will make sure that all data is fetched before the html is sent from server to client-side

// export default withApollo(createClient, { getDataFromTree });
