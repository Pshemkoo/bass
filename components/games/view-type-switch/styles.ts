import styled from 'styled-components';

type ViewTypeSwitchProps = {
	isActive: boolean;
};

export const Wrapper = styled.div`
	margin-bottom: 24px;
	display: flex;
`;

export const ViewTypeSwitch = styled.span<ViewTypeSwitchProps>`
	margin: 0 8px 0 16px;
	background: none;
	border: none;
	cursor: pointer;
	text-transform: uppercase;
	font-size: 14px;
	letter-spacing: 1px;
	text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};
	color: ${(props) =>
		props.isActive ? props.theme.palette.dark : props.theme.palette.strongGrey};
	text-underline-offset: 4px;
`;
