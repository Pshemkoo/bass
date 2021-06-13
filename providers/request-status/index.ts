import { buildContext } from '../buildContext';
import useState from './useState';

export type RequestStatus = 'PENDING' | 'RESOLVED' | 'NONE' | 'ERROR';
type StateKeys = keyof State;
export type Action =
	| { type: 'SET_PENDING'; payload: StateKeys }
	| { type: 'SET_RESOLVED'; payload: StateKeys }
	| { type: 'SET_NONE'; payload: StateKeys }
	| { type: 'SET_ERROR'; payload: StateKeys };
export type State = {
	fetchGames: RequestStatus;
	fetchCategories: RequestStatus;
	fetchUsers: RequestStatus;
	updateUserRole: RequestStatus;
	addNewRate: RequestStatus;
	fetchSuggestions: RequestStatus;
};

const { Provider, useStateContext } = buildContext(useState);
export const useRequestStatusContext = useStateContext;
const RequestStatusProvider = Provider;
export default RequestStatusProvider;
