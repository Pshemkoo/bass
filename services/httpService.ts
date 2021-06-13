import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { GetServerSidePropsContext } from 'next';
import cookieService from './cookieService';

class HttpService {
	private instance: AxiosInstance;

	constructor() {
		this.instance = axios.create({
			baseURL: 'https://gamesapi20210412185215.azurewebsites.net/',
		});
	}

	get = <T>(url: string, params?: unknown, config?: AxiosRequestConfig) =>
		this.instance.get<T>(url, {
			params,
			...config,
		});

	post = <T = {}>(url: string, body: unknown, config?: AxiosRequestConfig) =>
		this.instance.post<T>(url, body, {
			...config,
		});

	put = <T = {}>(url: string, body: unknown, config?: AxiosRequestConfig) =>
		this.instance.put<T>(url, body, {
			...config,
		});

	delete = (url: string, params?: unknown, config?: AxiosRequestConfig) =>
		this.instance.delete(url, {
			params,
			...config,
		});

	setAuthToken = (token: string) => {
		this.instance.defaults.headers.Authorization = `Bearer ${token}`;
		return token;
	};

	removeAuthToken = () => {
		delete this.instance.defaults.headers.Authorization;
	};

	addAuthTokenFromContext = (context: GetServerSidePropsContext) => {
		if (context.req) {
			const authCookie = context.req.headers.cookie?.split(
				'Authorization='
			) as string[];
			if (authCookie) {
				const [, token] = authCookie;
				this.setAuthToken(token);
				cookieService.setAuthCookie(token);
			} else {
				this.removeAuthToken();
			}
		} else {
			this.setAuthToken(cookieService.cookies.get('Authorization'));
		}

		return context;
	};
}

export default new HttpService();
