import type { AppProps } from 'next/app';
import Router from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NProgress from 'nprogress';
import { AnimatePresence } from 'framer-motion';

import AppProviders from '@/providers/AppProviders';

import { GlobalStyle } from '../styles';
import Layout from '../components/layout';

import '@/plugins/fontAwesome';
import '@/plugins/toastifyStyles.css';
import 'normalize.css';
import 'nprogress/nprogress.css';

NProgress.configure({
	showSpinner: false,
});

Router.events.on('routeChangeStart', () => {
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
	NProgress.done();
});
Router.events.on('routeChangeError', () => {
	NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppProviders>
			<Layout>
				<GlobalStyle />
				<ToastContainer />
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} />
				</AnimatePresence>
			</Layout>
		</AppProviders>
	);
}

export default MyApp;
