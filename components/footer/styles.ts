import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = styled.footer`
	padding: 12px 0;
	margin-top: 48px;
	box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 50%);
`;

export const Content = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CompanyName = styled.span`
	padding: 0 12px;
	letter-spacing: 1px;
	font-weight: 600;
`;

export const Social = styled.div`
	display: flex;
	align-items: center;
`;

export const ReservedIcon = styled(FontAwesomeIcon)``;

const Icon = styled(FontAwesomeIcon)`
	margin-left: 20px;
	font-size: 24px;
	padding: 4px;
	cursor: pointer;
	transition: color 0.3s ease;

	&:hover {
		color: ${(props) => props.theme.palette.dark};
	}
`;

export const FingerRight = styled(Icon)`
	color: ${(props) => props.theme.palette.dark};
	margin-right: 8px;
	font-size: 20px;
`;

export const LinkedinIcon = styled(Icon)`
	color: #0e76a8;
`;

export const FbIcon = styled(Icon)`
	color: #3b5998;
`;

export const InstagramIcon = styled(Icon)`
	color: #c13584;
`;
