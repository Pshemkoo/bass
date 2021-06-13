import { useRouter } from 'next/router';
import { useCallback, useEffect, useReducer } from 'react';

import userService, { UserLogged } from '@/services/user-service';
import cookieService from '@/services/cookieService';
import httpService from '@/services/httpService';
import { pipe } from '@/utils/functional';
import reducer from './reducer';
import { State } from '.';

const useState = () => {
	const [state, dispatch] = useReducer(reducer, {
		userId: -1,
		firstName: '',
		lastName: '',
		roles: [],
		id: -1,
	} as State);
	const router = useRouter();

	const setUserData = useCallback((data: UserLogged) => {
		dispatch({
			type: 'SET_USER_DATA',
			payload: data,
		});
	}, []);

	const redirectAfterLogin = useCallback(() => {
		router.push('/games');
	}, [router]);

	const logout = useCallback(() => {
		cookieService.removeAuthCookie();
		httpService.removeAuthToken();
		setUserData({
			userId: -1,
			firstName: '',
			lastName: '',
			roles: [],
		});
		router.push('/', undefined, {
			shallow: true,
		});
	}, [setUserData, router]);

	useEffect(() => {
		const authCookie = cookieService.getAuthCookie();
		if (authCookie) {
			pipe(
				httpService.setAuthToken,
				userService.parseJWTToken,
				setUserData
			)(authCookie);
		}
	}, [setUserData]);

	return {
		state,
		setUserData,
		redirectAfterLogin,
		logout,
	};
};

export default useState;
