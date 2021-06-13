import React, { useCallback, useEffect } from 'react';

import { useAdminContext } from '@/providers/admin';
import { useRequestStatusContext } from '@/providers/request-status';
import { UpdateUserRole } from '@/services/user-service';
import Row from './row';

import * as Styled from './styles';
import SpinnerControl from '../shared/spinner-control';

const Users = () => {
	const { state, fetchUsers, updateUserRole } = useAdminContext();
	const { state: requestState } = useRequestStatusContext();

	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	const handleRoleChange = useCallback(
		(value: UpdateUserRole) => {
			updateUserRole(value);
		},
		[updateUserRole]
	);

	return (
		<SpinnerControl isLoading={requestState.updateUserRole === 'PENDING'}>
			<Styled.Wrapper>
				{state.users.map(({ id, email, roles }) => (
					<Row
						key={id}
						email={email}
						userId={id}
						roles={roles}
						onRoleChange={handleRoleChange}
					/>
				))}
			</Styled.Wrapper>
		</SpinnerControl>
	);
};

export default Users;
