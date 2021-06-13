import { useCallback, useReducer } from 'react';

import reducer from './reducer';
import { State } from '.';

const useState = () => {
	const [state, dispatch] = useReducer(reducer, {
		fetchCategories: 'NONE',
		fetchGames: 'NONE',
	} as State);

	const setNone = useCallback((flag: keyof State) => {
		dispatch({
			type: 'SET_NONE',
			payload: flag,
		});
	}, []);

	const setError = useCallback((flag: keyof State) => {
		dispatch({
			type: 'SET_ERROR',
			payload: flag,
		});
	}, []);

	const setPending = useCallback((flag: keyof State) => {
		dispatch({
			type: 'SET_PENDING',
			payload: flag,
		});
	}, []);

	const setResolved = useCallback((flag: keyof State) => {
		dispatch({
			type: 'SET_RESOLVED',
			payload: flag,
		});
	}, []);

	return {
		state,
		setNone,
		setError,
		setPending,
		setResolved,
	};
};

export default useState;
