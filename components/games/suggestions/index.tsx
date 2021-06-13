import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

import SpinnerControl from '@/components/shared/spinner-control';
import { useRequestStatusContext } from '@/providers/request-status';
import { useGameContext } from '@/providers/game';
import Game from '../game';

const Suggestions = () => {
	const { state } = useRequestStatusContext();
	const { state: gameState, fetchSuggestions } = useGameContext();

	useEffect(() => {
		fetchSuggestions();
	}, []);

	return (
		<SpinnerControl isLoading={state.fetchSuggestions === 'PENDING'}>
			<Grid container spacing={3}>
				{gameState.suggestions.map((game) => (
					<Grid item md={6} key={game.title}>
						<Game {...game} />
					</Grid>
				))}
			</Grid>
		</SpinnerControl>
	);
};

export default Suggestions;
