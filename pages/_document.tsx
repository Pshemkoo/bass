import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="pl">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
						rel="stylesheet"
					/>
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta
						httpEquiv="Content-Type"
						content="text/html; charset=ISO-8859-1"
					/>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="description" content="BAS Gaming page" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
