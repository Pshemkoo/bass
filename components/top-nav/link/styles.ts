import styled, { css } from 'styled-components';

export const Wrapper = styled.a<{ isActive: boolean }>`
	color: ${(props) => props.theme.palette.dark};
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 700;
	padding: 8px 12px;
	position: relative;
	font-size: 18px;
	margin-right: 24px;
	cursor: pointer;

	&:after {
		content: '';
		right: 100%;
		opacity: 0;
		position: absolute;
		bottom: 0px;
		height: 3px;
		background-color: ${(props) => props.theme.palette.lightDark};
		left: 0;
		transition: right 0.3s ease;
	}

	&:hover {
		&::after {
			opacity: 1;
			right: 0;
		}
	}

	${(props) =>
		props.isActive &&
		css`
			&::after {
				opacity: 1;
				right: 0;
			}
		`}
`;
