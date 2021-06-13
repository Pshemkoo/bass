import { useRouter } from 'next/router';

import { useUserContext } from '@/providers/user';
import Link from './link';
import Logo from '../shared/logo';
import Button from '../controls/button';

import * as Styled from './styles';

const TopNav = () => {
	const { state, logout } = useUserContext();
	const router = useRouter();

	const handleLogoClick = () => {
		router.push('/');
	};

	return (
		<Styled.Wrapper>
			<Styled.Header>
				<Logo onClick={handleLogoClick} />
				<Styled.Links>
					<Link href="/games">Gry</Link>
					{state.userId === -1 && <Link href="/account">Konto</Link>}
				</Styled.Links>
				{state.userId !== -1 && (
					<Styled.WelcomeUser>
						<Styled.Text>Witaj {state.firstName}</Styled.Text>
						<Button onClick={logout}>wyloguj</Button>
					</Styled.WelcomeUser>
				)}
			</Styled.Header>
		</Styled.Wrapper>
	);
};

export default TopNav;
