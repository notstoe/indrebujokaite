import Page from 'Components/Page/Page';

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Page>
			<Component {...pageProps} />
		</Page>
	);
}

export default MyApp;
