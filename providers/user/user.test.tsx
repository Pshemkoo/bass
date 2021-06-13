import { renderHook, act } from '@testing-library/react-hooks';

import useState from './useState';

const MOCK_DATA = {
	userData: {
		firstName: 'new firstName',
		userId: 0,
		lastName: '',
		roles: [],
	},
};

describe('User Provider', () => {
	test('Initial state', async () => {
		const { result } = renderHook(() => useState());
		expect(result.current.state.firstName).toBe('');
	});

	test('Set User Data', () => {
		const { result } = renderHook(() => useState());

		act(() => {
			result.current.setUserData(MOCK_DATA.userData);
		});
		expect(result.current.state.firstName).toBe(MOCK_DATA.userData.firstName);
	});

	test('Logout', () => {
		const { result } = renderHook(() => useState());

		act(() => {
			result.current.logout();
		});
		expect(result.current.state.firstName).toBe('');
	});
});
