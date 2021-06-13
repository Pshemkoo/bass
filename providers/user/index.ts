import { UserLogged } from '@/services/user-service';
import { buildContext } from '../buildContext';
import useState from './useState';

export type Action = { type: 'SET_USER_DATA'; payload: State };
export type State = UserLogged;

const { Provider, useStateContext } = buildContext(useState);
export const useUserContext = useStateContext;

const UserProvider = Provider;
export default UserProvider;
