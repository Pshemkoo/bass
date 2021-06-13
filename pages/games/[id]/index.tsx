import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import gameService, { Game as GameType } from '@/services/gameService';
import GameRoute from '@/components/games/game-route';
import GamePanel from '@/components/admin/game-panel';
import { Flex, ResponsiveContainer } from '@/styles';
import { useGameContext } from '@/providers/game';
import httpService from '@/services/httpService';
import Rates from '@/components/rates';
import NewRate from '@/components/rates/new-rate';
import { useUserContext } from '@/providers/user';

type Props = { data: GameType };

const Game: React.FC<Props> = ({ data }) => {
	const { setGame, state } = useGameContext();
	const { state: userState } = useUserContext();

	useEffect(() => {
		setGame(data);
	}, [data, setGame]);

	return (
		<>
			<Head>
				<title>{state.game?.title}</title>
			</Head>
			<ResponsiveContainer>
				<GamePanel game={data} />
				{state.game && (
					<Flex direction="column">
						<GameRoute {...state.game} />
						{state.game.rates.findIndex(
							(rate) => rate.user === userState.firstName
						) === -1 && <NewRate gameId={state.game.id} />}
						<Rates items={state.game.rates} />
					</Flex>
				)}
			</ResponsiveContainer>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	httpService.addAuthTokenFromContext(context);
	const { data } = await gameService.fetchById(+(context.params?.id as string));
	return {
		props: {
			data,
		},
	};
};

export default Game;
