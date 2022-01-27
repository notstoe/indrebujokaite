import Page from 'Components/Page/Page';

import { AppProps } from 'next/app';
import { Router } from 'next/router';

import NProgress from 'nprogress';
import 'styles/nprogress.css';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Page>
			<Component {...pageProps} />
		</Page>
	);
}

export default MyApp;
