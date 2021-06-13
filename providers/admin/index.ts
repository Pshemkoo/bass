import { User, UpdateUserRole } from '@/services/user-service';
import { buildContext } from '../buildContext';
import useState from './useState';

export type Action =
	| { type: 'SET_USERS'; payload: User[] }
	| {
			type: 'UPDATE_USER_ROLE';
			payload: UpdateUserRole;
	  };
export type State = { users: User[] };

const { Provider, useStateContext } = buildContext(useState);
export const useAdminContext = useStateContext;

const AdminProvider = Provider;
export default AdminProvider;
