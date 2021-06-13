import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Styled from './styles';

const Footer = () => (
	<Styled.Footer>
		<Styled.Content>
			<div>
				<FontAwesomeIcon icon={['far', 'copyright']} />
				<Styled.CompanyName>BAS GAMING</Styled.CompanyName>
				All rights reserved
			</div>
			<Styled.Social>
				<Styled.FingerRight icon={['far', 'hand-point-right']} />
				<Styled.LinkedinIcon icon={['fab', 'linkedin-in']} />
				<Styled.FbIcon icon={['fab', 'facebook-square']} />
				<Styled.InstagramIcon icon={['fab', 'instagram']} />
			</Styled.Social>
		</Styled.Content>
	</Styled.Footer>
);

export default Footer;
