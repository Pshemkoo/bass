import { useRouter } from 'next/router';

import Proposal from './proposal';

import * as Styled from './styles';

const About = () => {
	const router = useRouter();

	const handleCreateAccountClick = () => {
		router.push('/account');
	};

	return (
		<Styled.Wrapper animate={{ opacity: 1 }} initial={{ opacity: 0.5 }}>
			<Styled.Title>
				Załóż konto i korzystaj ze wszystkich funkcji serwisu
			</Styled.Title>
			<Styled.List>
				<Proposal>dodawanie gier do ulubionych</Proposal>
				<Proposal>proponowanie gier na podstawie Twoich preferencji</Proposal>
			</Styled.List>
			<Styled.Button
				onClick={handleCreateAccountClick}
				variant="outlined"
				size="medium"
				color="primary"
			>
				załóż konto
			</Styled.Button>
		</Styled.Wrapper>
	);
};

export default About;
