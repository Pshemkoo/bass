import AppProviders from '@/providers/AppProviders';
import { RenderOptions, render } from '@testing-library/react';

const Providers: React.FC = ({ children }) => (
	<AppProviders>{children}</AppProviders>
);

const customRender = (
	ui: React.ReactElement<any>,
	options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
