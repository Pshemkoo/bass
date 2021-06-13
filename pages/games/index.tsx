import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import GamesList from '@/components/games';
import Search from '@/components/games/search';
import SearchWallpaper from '@/components/games/search-wallpaper';
import gameService, { GameResponse } from '@/services/gameService';
import httpService from '@/services/httpService';
import { Flex } from '@/styles';
import BasePanel from '@/components/admin/base-panel';
import { useGameContext } from '@/providers/game';

type Props = { data: GameResponse };

const Games: React.FC<Props> = (props) => {
	const { setGamesResponse, state } = useGameContext();

	useEffect(() => {
		setGamesResponse(props.data);
	}, [setGamesResponse, props]);

	return (
		<>
			<Head>
				<title>Gry</title>
			</Head>
			<Flex maxHeight>
				<BasePanel />
				<SearchWallpaper>
					<Search />
				</SearchWallpaper>
				<GamesList games={state.data} />
			</Flex>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	httpService.addAuthTokenFromContext(context);
	const { data } = await gameService.fetch();
	return {
		props: {
			data,
		},
	};
};

export default Games;
