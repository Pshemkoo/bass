import { User } from '@/services/user-service';
import { Action, State } from '.';

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'SET_USERS':
			return {
				...state,
				users: action.payload,
			};
		case 'UPDATE_USER_ROLE': {
			const user = state.users.find(
				({ id }) => id === action.payload.userId
			) as User;
			const isRoleExisting = user.roles.includes(action.payload.name);
			return {
				...state,
				users: [
					...state.users.map((user: User) =>
						user.id === action.payload.userId
							? {
									...user,
									roles: isRoleExisting
										? user.roles.filter((role) => role !== action.payload.name)
										: [...user.roles, action.payload.name],
							  }
							: user
					),
				],
			};
		}
		default:
			throw new Error(`Unhandled action type in reducer: Admin`);
	}
};

export default reducer;
