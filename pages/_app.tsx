import "../styles/globals.css";

import { ApolloClient, ApolloProvider } from "@apollo/client";
import withData from "../lib/withData";

import { AppInitialProps, AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";

interface AppPropsI extends AppProps {
	apollo: ApolloClient<any>;
}

interface InitialPropsI extends AppInitialProps {
	Component: NextComponentType<NextPageContext, any, {}>;
	ctx: any;
	pageProps: any;
}

function MyApp({ Component, pageProps, apollo }: AppPropsI) {
	return (
		<ApolloProvider client={apollo}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

// every page that has getInitialProps, it will wait for it to be fetched

MyApp.getInitialProps = async function ({ Component, ctx }: InitialPropsI) {
	let pageProps: Record<string, string> = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	pageProps.query = ctx.query;
	return { pageProps };
};

// @ts-ignore
export default withData(MyApp);
