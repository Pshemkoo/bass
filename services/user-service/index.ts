import userApi from '@/api-repository/user';
import { AxiosResponse } from 'axios';

export interface UserRegistration {
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	passwordConfirmation: string;
}

export interface UserLogin {
	username: string;
	password: string;
}

export interface UserLoginResponse {
	token: string;
}

export interface UserLogged {
	firstName: string;
	lastName: string;
	userId: number;
	roles: string[];
}

export interface User {
	id: number;
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	roles: string[];
}

export interface UpdateUserRole {
	userId: number;
	name: string;
}

class UserService {
	register = async (values: UserRegistration) => {
		const { passwordConfirmation, ...rest } = values;
		return await userApi.register(rest);
	};

	login = async (
		values: UserLogin
	): Promise<AxiosResponse<UserLoginResponse>> => await userApi.login(values);

	parseJWTToken = <T>(token: string): T => {
		const [, base64Url] = token.split('.');
		const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		const jsonPayload = decodeURIComponent(
			atob(base64)
				.split('')
				.map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
				.join('')
		);
		return JSON.parse(jsonPayload);
	};

	fetchAll = async () => await userApi.fetchAll();

	updateRole = (role: UpdateUserRole) => userApi.updateRole(role);
}

export default new UserService();
