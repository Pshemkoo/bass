import styled from 'styled-components';

export const Wrapper = styled.div`
	background-image: url('/assets/search-bg.jpg');
	width: 100%;
	background-size: cover;
	background-position: top;
	height: 450px;
	margin-bottom: 32px;
	position: relative;
	z-index: 1;
	display: flex;
	align-items: center;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: ${(props) => props.theme.palette.dark};
		opacity: 0.75;
		z-index: -1;
	}
`;
