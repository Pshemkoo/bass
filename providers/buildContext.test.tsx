import { useCallback, useState } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { render } from '@/plugins/testing';
import { buildContext } from './buildContext';

const useStateMock = () => {
	const [counter, setCounter] = useState(10);

	const increment = useCallback(() => {
		setCounter((state) => state + 1);
	}, []);

	return {
		counter,
		increment,
	};
};

const { Context, useStateContext, Provider } = buildContext(useStateMock);
export const useMockContext = useStateContext;

const contextWrapper = () => (
	<Provider>
		<Context.Consumer>
			{(value) => <span>counter: {value?.counter}</span>}
		</Context.Consumer>
	</Provider>
);

describe('Build Context', () => {
	test('Initial', () => {
		const { getByText } = render(contextWrapper());
		expect(getByText('counter: 10')).toBeTruthy();
	});

	test('Call action', () => {
		const { result } = renderHook(() => useStateContext(), {
			wrapper: Provider,
		});

		act(() => {
			result.current.increment();
		});

		expect(result.current.counter).toBe(11);
	});
});
