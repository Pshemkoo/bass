import { Action, State } from '.';

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'SET_USER_DATA':
			return {
				...state,
				...action.payload,
			};
		default:
			throw new Error(
				`Unhandled action type (${action.type}) in reducer: User`
			);
	}
};

export default reducer;
