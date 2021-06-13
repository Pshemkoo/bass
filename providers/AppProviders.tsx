import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { pl } from 'date-fns/locale';

import { theme } from '@/plugins/theme';
import RequestStatusProvider from './request-status';
import GameProvider from './game';
import AdminProvider from './admin';
import UserProvider from './user';

const AppProviders: React.FC = ({ children }) => (
	<ThemeProvider theme={theme}>
		<MuiPickersUtilsProvider utils={DateFnsUtils} locale={pl}>
			<RequestStatusProvider>
				<GameProvider>
					<AdminProvider>
						<UserProvider>{children}</UserProvider>
					</AdminProvider>
				</GameProvider>
			</RequestStatusProvider>
		</MuiPickersUtilsProvider>
	</ThemeProvider>
);

export default AppProviders;
