import { ApolloClient, ApolloProvider } from '@apollo/client';
import withData from '@lib/withData';

import { AppProps } from 'next/app';

interface AppPropsI extends AppProps {
	apollo: ApolloClient<any>;
}

function MyApp({ Component, pageProps, apollo }: AppPropsI) {
	return (
		<ApolloProvider client={apollo}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

// @ts-ignore
export default withData(MyApp);
