import GameForm from '@/components/games/game-form';
import AuthGuard from '@/components/shared/guard/auth';
import { userPermissionsAccess } from '@/utils/roles';
import Admin from '..';
import AccordionSection from '../accordion-section';
import UserManagementPanel from '../user-management-panel';

type Props = {
	firstDefaultExpanded?: boolean;
};

const BasePanel: React.FC<Props> = ({
	children,
	firstDefaultExpanded = true,
}) => (
	<Admin>
		<AccordionSection label="Nowa gra" defaultExpanded={firstDefaultExpanded}>
			<GameForm />
		</AccordionSection>
		<AuthGuard constraints={userPermissionsAccess}>
			<AccordionSection label="Użytkownicy">
				<UserManagementPanel />
			</AccordionSection>
		</AuthGuard>
		{children}
	</Admin>
);

export default BasePanel;
