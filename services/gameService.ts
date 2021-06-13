import httpService from './httpService';

export interface Game {
	id: number;
	title: string;
	description: string;
	releaseDate: Date;
	url: string;
	averageRate: number;
	category: Category;
	rates: Rate[];
}

export interface Rate {
	comment: string;
	rate: number;
	date: string;
	user: string;
}

export interface Category {
	id: number;
	name: string;
}

export interface GameResponse {
	count: number;
	pageIndex: number;
	data: Game[];
}

export interface GameCreate extends Omit<Game, 'category'> {
	categoryId: number;
}

export interface GameUpdate extends GameCreate {}

export interface Filters {
	title?: string;
	description?: string;
	category?: string;
}

class GameService {
	fetch = (filters: Filters = {}) =>
		httpService.get<GameResponse>('/api/games/search', {
			...filters,
			size: 99,
		});

	fetchById = (id: number) => httpService.get(`api/games`, { id });

	create = (game: GameCreate) => httpService.post<Game>('/api/games', game);

	fetchCategories = () => httpService.get<Category[]>('/api/categories');

	delete = (id: number) => httpService.delete('/api/games', { id });

	update = (game: GameCreate) => httpService.put<Game>('/api/games', game);

	addRate = (gameId: number, rate: Rate) =>
		httpService.post(`/api/games/${gameId}/rate`, rate);

	fetchSuggestions = () => httpService.get<Game>('/api/games/suggestions');
}

export default new GameService();
