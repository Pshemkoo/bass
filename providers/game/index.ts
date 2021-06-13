import {
	Category,
	Filters,
	Game,
	GameResponse,
	Rate,
} from '@/services/gameService';
import { buildContext } from '../buildContext';
import useState from './useState';

export type Action =
	| { type: 'SET_GAME_RESPONSE'; payload: GameResponse }
	| {
			type: 'SET_CATEGORIES';
			payload: Category[];
	  }
	| {
			type: 'SET_FILTERS';
			payload: Filters;
	  }
	| {
			type: 'SET_GAME';
			payload: Game;
	  }
	| {
			type: 'SET_RATE';
			payload: Rate;
	  }
	| {
			type: 'SET_SUGGESTIONS';
			payload: Game[];
	  };
export type State = {
	categories: Category[];
	filters: Filters;
	game?: Game;
	suggestions: Game[];
} & GameResponse;

const { Provider, useStateContext } = buildContext(useState);
export const useGameContext = useStateContext;
const GameProvider = Provider;
export default GameProvider;
