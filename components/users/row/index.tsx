import { UpdateUserRole } from '@/services/user-service';

import * as Styled from './styles';

type Props = {
	email: string;
	userId: number;
	roles: string[];
	onRoleChange: (value: UpdateUserRole) => void;
};

const Row: React.FC<Props> = ({ userId, roles, email, onRoleChange }) => {
	const handleRoleChange = (names: unknown) => {
		let roleName = '';
		if (roles.length > (names as string[]).length) {
			[roleName] = roles.filter((role) => !(names as string[]).includes(role));
		} else {
			[roleName] = (names as string[]).filter((role) => !roles.includes(role));
		}
		onRoleChange({
			userId,
			name: roleName,
		});
	};

	return (
		<Styled.Wrapper>
			<Styled.Login>{email}</Styled.Login>
			<Styled.Dropdown
				label="Role"
				onChange={handleRoleChange}
				value={roles}
				multiple
				keyProperty=""
				options={['Admin', 'Editor', 'User']}
			/>
		</Styled.Wrapper>
	);
};

export default Row;
