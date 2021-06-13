import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import { Game as GameType } from '@/services/gameService';
import { Flex, ResponsiveContainer } from '@/styles';
import { useRequestStatusContext } from '@/providers/request-status';
import { useUserContext } from '@/providers/user';
import pubSub from '@/utils/pubSub';
import Game from './game';
import SpinnerControl from '../shared/spinner-control';
import ViewTypeSwitch, { GameViewType } from './view-type-switch';
import Suggestions from './suggestions';

type Props = {
	games: GameType[];
};

const Games: React.FC<Props> = ({ games }) => {
	const [gameViewType, setGameViewType] = useState<GameViewType>('base');
	const { state } = useRequestStatusContext();
	const { state: userState } = useUserContext();

	useEffect(() => {
		const subscribeSearchClick = () => {
			setGameViewType('base');
		};

		pubSub.subscribe('searchClick', subscribeSearchClick);
		return () => {
			pubSub.unsubscribe('searchClick', subscribeSearchClick);
		};
	}, []);

	const handleViewTypeChange = (type: GameViewType) => {
		setGameViewType(type);
	};

	return (
		<ResponsiveContainer>
			<Flex direction="column">
				{userState.userId !== -1 && (
					<ViewTypeSwitch
						viewType={gameViewType}
						onChange={handleViewTypeChange}
					/>
				)}
				{gameViewType === 'base' ? (
					<SpinnerControl isLoading={state.fetchGames === 'PENDING'}>
						<Grid container spacing={3}>
							{games.map((game) => (
								<Grid item md={6} key={game.title}>
									<Game {...game} />
								</Grid>
							))}
						</Grid>
					</SpinnerControl>
				) : (
					<Suggestions />
				)}
			</Flex>
		</ResponsiveContainer>
	);
};

export default Games;
