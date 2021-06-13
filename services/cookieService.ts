import Cookies from 'universal-cookie';

class CookieService {
	private _cookies;

	get cookies() {
		return this._cookies;
	}

	constructor() {
		this._cookies = new Cookies();
	}

	setAuthCookie = (token: string) => {
		this._cookies.remove('Authorization');
		this._cookies.set('Authorization', token, {
			path: '/',
		});
		return token;
	};

	getAuthCookie = () => this._cookies.get('Authorization');

	removeAuthCookie = () => {
		this._cookies.remove('Authorization', { path: '/' });
	};
}

const cookieService = new CookieService();
export default cookieService;
