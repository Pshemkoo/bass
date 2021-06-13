import styled from 'styled-components';

export const Title = styled.h2`
	font-weight: 500;
	text-align: center;
`;

export const SwapLabel = styled.span`
	color: ${(props) => props.theme.palette.grey};
	text-align: center;
	padding-top: 8px;
	margin-top: 14px;
	text-decoration: underline;
	cursor: pointer;
	display: inline-block;
	width: 100%;
`;
