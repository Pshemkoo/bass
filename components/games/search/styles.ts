import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;
	width: 450px;
	margin: 0 auto;
	position: relative;
`;

export const Label = styled.label`
	font-size: 22px;
	color: ${(props) => props.theme.palette.white};
`;

export const ControlGroup = styled.div`
	display: flex;
	margin-top: 12px;
`;

export const Input = styled.input`
	padding: 8px 12px;
	font-size: 20px;
	border-radius: 8px 0 0 8px;
	outline: none;
	border: none;
	flex: 1;
	line-height: 1.5;
`;

export const Button = styled.button`
	border: none;
	padding: 0 18px;
	cursor: pointer;
	color: ${(props) => props.theme.palette.grey};
	background-color: ${(props) => props.theme.palette.lightDark};
	transition: background-color 0.3s ease;
	outline: none;

	&:hover {
		background-color: ${(props) => props.theme.palette.dark};
	}
`;

type Props = {
	isExpanded: boolean;
};

export const RoundedBtn = styled(Button)<Props>`
	border-radius: 0 8px 8px 0;
	background-color: ${(props) => props.isExpanded && props.theme.palette.dark};
`;

const slideDown = keyframes`
	from {
		transform: translateY(0px);
		opacity: 0;
	}

	to {
		transform: translateY(12px);
		opacity: 1;
	}
`;

export const FilterWrapper = styled.div`
	position: absolute;
	width: 100%;
	top: 100%;
	padding: 12px;
	border-radius: 8px;
	box-sizing: border-box;
	background-color: ${(props) => props.theme.palette.lightWhite};
	animation: ${slideDown} 0.3s forwards ease;
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 12px;
`;
