import { renderHook, act } from '@testing-library/react-hooks';

import useState from './useState';
import AppProviders from '../AppProviders';

const wrapper = ({ children }) => <AppProviders>{children}</AppProviders>;

describe('Game Provider', () => {
	test('Initial state', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useState(), {
			wrapper,
		});
		await waitForNextUpdate();

		expect(result.current.state.data.length).toBe(0);
	});

	// test('Update filters', async () => {
	// 	const { result, waitForNextUpdate } = renderHook(() => useState(), {
	// 		wrapper,
	// 	});
	// 	await waitForNextUpdate();

	// 	act(() =>
	// 		result.current.setFilters({
	// 			title: 'sample title',
	// 		})
	// 	);

	// 	expect(result.current.state.filters).toStrictEqual({
	// 		title: 'sample title',
	// 	});
	// });
});
