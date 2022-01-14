import { ApolloClient, ApolloProvider } from '@apollo/client';
import withData from '@lib/withData';
import Page from 'Components/Page/Page';

import { NextPage, NextPageContext } from 'next';
import { AppProps } from 'next/app';

interface AppPropsI extends AppProps {
	apollo: ApolloClient<any>;
}

function MyApp({ Component, pageProps, apollo }: AppPropsI) {
	return (
		<ApolloProvider client={apollo}>
			<Page>
				<Component {...pageProps} />
			</Page>
		</ApolloProvider>
	);
}

MyApp.getInitialProps = async function ({
	Component,
	ctx,
}: {
	Component: NextPage;
	ctx: NextPageContext;
}) {
	let pageProps: any = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	pageProps.query = ctx.query;
	return { pageProps };
};

// @ts-ignore
export default withData(MyApp);
