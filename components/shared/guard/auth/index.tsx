import { useUserContext } from '@/providers/user';

type Props = {
	constraints: string[];
};

const AuthGuard: React.FC<Props> = ({ constraints, children }) => {
	const { state } = useUserContext();

	if (constraints.filter((role) => state.roles.includes(role)).length) {
		return <>{children}</>;
	}

	return null;
};

export default AuthGuard;
