import httpService from '@/services/httpService';
import {
	UpdateUserRole,
	User,
	UserLogin,
	UserLoginResponse,
} from '@/services/user-service';

interface UserRegistrationDTO {
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	password: string;
}

const userApi = {
	register: (values: UserRegistrationDTO) =>
		httpService.post('/api/register', values),
	login: (values: UserLogin) =>
		httpService.post<UserLoginResponse>('/api/authenticate', values),
	fetchAll: () => httpService.get<{ data: User[] }>(`/api/user/all`),
	updateRole: (role: UpdateUserRole) => httpService.put('/api/role', role),
};

export default userApi;
