import { renderHook, act } from '@testing-library/react-hooks';

import useState from './useState';

describe('Request Status Provider', () => {
	test('Initial state', async () => {
		const { result } = renderHook(() => useState());
		expect(result.current.state.fetchCategories).toBe('NONE');
	});

	test('Set error', () => {
		const { result } = renderHook(() => useState());

		act(() => {
			result.current.setError('fetchCategories');
		});
		expect(result.current.state.fetchCategories).toBe('ERROR');
	});

	test('Set pending', () => {
		const { result } = renderHook(() => useState());

		act(() => {
			result.current.setPending('fetchCategories');
		});
		expect(result.current.state.fetchCategories).toBe('PENDING');
	});

	test('Set resolved', () => {
		const { result } = renderHook(() => useState());

		act(() => {
			result.current.setResolved('fetchCategories');
		});
		expect(result.current.state.fetchCategories).toBe('RESOLVED');
	});

	test('Set none', () => {
		const { result } = renderHook(() => useState());

		act(() => {
			result.current.setNone('fetchCategories');
		});
		expect(result.current.state.fetchCategories).toBe('NONE');
	});
});
