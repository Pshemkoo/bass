import { useRouter } from 'next/router';

import * as Styled from './styles';

const Wallpaper = () => {
	const router = useRouter();

	const handleMoreGamesClick = () => {
		router.push('/games');
	};

	return (
		<Styled.Wrapper animate={{ opacity: 1 }} initial={{ opacity: 0.5 }}>
			<Styled.Title>Największy serwis z grami w sieci</Styled.Title>
			<Styled.SubTitle>Poznaj nowe tytuły już teraz!</Styled.SubTitle>
			<Styled.Button
				variant="outlined"
				color="primary"
				onClick={handleMoreGamesClick}
			>
				zobacz wszystkie gry
			</Styled.Button>
		</Styled.Wrapper>
	);
};

export default Wallpaper;
