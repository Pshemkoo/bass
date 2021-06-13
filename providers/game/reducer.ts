import { Game, Rate } from '@/services/gameService';
import { Action, State } from '.';

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'SET_GAME_RESPONSE': {
			return {
				...state,
				...action.payload,
			};
		}
		case 'SET_CATEGORIES': {
			return {
				...state,
				categories: action.payload,
			};
		}
		case 'SET_FILTERS': {
			return {
				...state,
				filters: action.payload,
			};
		}
		case 'SET_GAME': {
			return {
				...state,
				game: action.payload,
			};
		}
		case 'SET_RATE': {
			return {
				...state,
				game: {
					...(state.game as Game),
					rates: [...(state.game?.rates as Rate[]), action.payload],
				},
			};
		}
		case 'SET_SUGGESTIONS': {
			return {
				...state,
				suggestions: action.payload,
			};
		}
		default:
			throw new Error(`Unhandled action type in reducer: Game`);
	}
};

export default reducer;
