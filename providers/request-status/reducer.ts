import { Action, State } from '.';

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'SET_ERROR': {
			return {
				...state,
				[action.payload]: 'ERROR',
			};
		}
		case 'SET_NONE': {
			return {
				...state,
				[action.payload]: 'NONE',
			};
		}
		case 'SET_PENDING': {
			return {
				...state,
				[action.payload]: 'PENDING',
			};
		}
		case 'SET_RESOLVED': {
			return {
				...state,
				[action.payload]: 'RESOLVED',
			};
		}
		default:
			throw new Error(`Unhandled action type in reducer: RequestStatus`);
	}
};

export default reducer;
