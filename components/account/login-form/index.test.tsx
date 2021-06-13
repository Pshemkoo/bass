import { render } from '@/plugins/testing';
import { screen } from '@testing-library/react';
import LoginForm from '.';

describe('LoginForm tests', () => {
	test('render form', () => {
		render(<LoginForm />);
		const form = screen.getByRole('form');
		expect(form).toBeInTheDocument();
	});
});
