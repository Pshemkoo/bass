import styled from 'styled-components';

type Props = {
	isExpanded: boolean;
};

export const Wrapper = styled.div<Props>`
	position: fixed;
	background: #f8f8f8;
	right: 0;
	top: 0;
	width: ${(props) => (props.isExpanded ? '400px' : '0')};
	z-index: 1000;
	bottom: 0;
	box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 50%);
	transition: width 0.6s ease;
`;

export const ExpandButton = styled.button<Props>`
	position: absolute;
	left: 0;
	transform: translateX(-100%);
	top: 64px;
	background-color: ${(props) => props.theme.palette.lightDark};
	border: 0;
	outline: 0;
	padding: 12px 0;
	cursor: pointer;
	transition: width 0.3s ease, background-color 0.3s ease;
	width: 56px;
	height: 48px;
	border-radius: 4px 0 0 4px;
	display: flex;
	align-items: center;
	position: relative;

	&:hover {
		width: 80px;
		background-color: ${(props) => props.theme.palette.dark};

		svg {
			left: ${(props) => (props.isExpanded ? '75%' : '25%')};
		}
	}

	svg {
		color: ${(props) => props.theme.palette.grey};
		position: absolute;
		left: 50%;
		transform: ${(props) =>
			props.isExpanded
				? 'translateX(-50%) rotate(180deg)'
				: 'translateX(-50%)'};
		transition: left 0.3s ease, transform 0.3s ease;
	}
`;

export const ButtonGroup = styled.div`
	position: absolute;
`;

export const Content = styled.div<Props>`
	overflow: auto;
	transition: opacity 0.3s ease;
	transition-delay: ${(props) => (props.isExpanded ? '0.3s' : '0s')};
	opacity: ${(props) => (props.isExpanded ? '1' : '0')};
	max-height: 100%;
	margin-right: -16px;
`;
