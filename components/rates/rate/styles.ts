import styled from 'styled-components';

export const Wrapper = styled.div`
	border: 1px solid ${(props) => props.theme.palette.grey};
	position: relative;
	padding: 16px;
	margin-top: 24px;
	border-radius: 4px;
`;

export const Rate = styled.div`
	position: absolute;
	top: 16px;
	right: 16px;
	display: flex;
	align-items: center;
`;

export const RateTitle = styled.span`
	padding-right: 8px;
	font-size: 14px;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Author = styled.span`
	padding-bottom: 4px;
`;

export const Text = styled.p`
	margin: 12px 0 0;
`;

export const Date = styled.span`
	color: ${(props) => props.theme.palette.strongGrey};
	font-size: 14px;

	svg {
		margin-right: 8px;
	}
`;
