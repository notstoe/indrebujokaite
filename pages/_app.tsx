import "../styles/globals.css";

import { NextComponentType, NextPageContext } from "next";

import { ApolloProvider } from "@apollo/client";
import withData from "../lib/withData";
import { AppInitialProps } from "next/app";

interface AppProps extends AppInitialProps {
	apollo: any;
	Component: NextComponentType<NextPageContext, any, {}>;
}

// type AppProps = {
// 	pageProps: any;
// 	Component: NextComponentType<NextPageContext, any, {}>;
// 	apollo: any;
// };

type InitialProps = {
	Component: NextComponentType<NextPageContext, any, {}>;
	ctx: any;
	pageProps: any;
};

function MyApp({ Component, pageProps, apollo }: AppProps) {
	return (
		<ApolloProvider client={apollo}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

// boilerplate code, to make sure that every page that has getInitialProps, it will wait for it to be fetched
// every page will have getInitialProps cause withData() is adding it to them

MyApp.getInitialProps = async function ({ Component, ctx }: InitialProps) {
	let pageProps: Record<string, string> = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	pageProps.query = ctx.query;
	return { pageProps };
};

// exporting the app through withData function, this way the apollo prop sends the data through MyApp to the <ApolloProvider>

export default withData(MyApp);
