export interface Theme {
	palette: {
		dark: string;
		lightDark: string;
		white: string;
		grey: string;
		error: string;
		success: string;
		lightWhite: string;
		strongGrey: string;
	};
}

export const theme: Theme = {
	palette: {
		lightWhite: '#f0f0f0',
		dark: '#333',
		lightDark: '#444',
		strongGrey: '#aaa',
		grey: '#ddd',
		white: '#fff',
		error: '#ff1a47',
		success: '#4BB543',
	},
};

export type ColorVariant = 'dark' | 'white';
