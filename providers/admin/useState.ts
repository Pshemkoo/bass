import { useCallback, useReducer } from 'react';

import userService, { UpdateUserRole } from '@/services/user-service';
import toastService from '@/services/toastService';
import reducer from './reducer';
import { State } from '.';
import { useRequestStatusContext } from '../request-status';

const useState = () => {
	const [state, dispatch] = useReducer(reducer, { users: [] } as State);
	const { setPending, setResolved } = useRequestStatusContext();

	const fetchUsers = useCallback(async () => {
		setPending('fetchUsers');
		const { data } = await userService.fetchAll();
		dispatch({
			type: 'SET_USERS',
			payload: data.data,
		});
		setResolved('fetchUsers');
	}, [setPending, setResolved]);

	const updateUserRole = useCallback(
		async (payload: UpdateUserRole) => {
			try {
				setPending('updateUserRole');
				await userService.updateRole(payload);
				dispatch({
					type: 'UPDATE_USER_ROLE',
					payload,
				});
				setResolved('updateUserRole');
				toastService.success(
					'Rola użytkownika została zaktualizowana pomyślnie'
				);
			} catch (error) {
				toastService.error(
					'Rola użytkownika nie została zaktualizowana pomyślnie'
				);
			}
		},
		[setPending, setResolved]
	);

	return {
		state,
		fetchUsers,
		updateUserRole,
	};
};

export default useState;
