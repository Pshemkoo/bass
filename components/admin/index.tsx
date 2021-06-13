import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { adminAccess } from '@/utils/roles';
import AuthGuard from '../shared/guard/auth';

import * as Styled from './styles';

const Admin: React.FC = ({ children }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleExpandedChange = () => {
		setIsExpanded((state) => !state);
	};

	return (
		<AuthGuard constraints={adminAccess}>
			<Styled.Wrapper isExpanded={isExpanded}>
				<Styled.ButtonGroup>
					<Styled.ExpandButton
						isExpanded={isExpanded}
						onClick={handleExpandedChange}
					>
						<FontAwesomeIcon icon={['fas', 'chevron-left']} />
					</Styled.ExpandButton>
				</Styled.ButtonGroup>
				<Styled.Content isExpanded={isExpanded}>{children}</Styled.Content>
			</Styled.Wrapper>
		</AuthGuard>
	);
};

export default Admin;
