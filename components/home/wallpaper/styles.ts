import styled from 'styled-components';
import MUIButton from '@material-ui/core/Button';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
	background-image: url('/assets/games-pubg-playerunknowns-battlegrounds-86443.jpg');
	height: 700px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	position: relative;
	display: flex;
	align-items: center;
	z-index: 0;
	flex-direction: column;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		opacity: 0.75;
		background-color: ${(props) => props.theme.palette.dark};
		z-index: -1;
	}
`;

export const Title = styled.h1`
	margin: 72px 0 12px;
	color: ${(props) => props.theme.palette.grey};
	font-weight: 500;
	letter-spacing: 1px;
`;

export const SubTitle = styled.h3`
	color: ${(props) => props.theme.palette.grey};
	font-weight: 500;
	letter-spacing: 1px;
`;

export const Button = styled(MUIButton)`
	&& {
		color: ${(props) => props.theme.palette.grey};
		border: 1px solid ${(props) => props.theme.palette.grey};
		transition: all 0.3s ease;
		position: absolute;
		bottom: 25%;
		left: 50%;
		transform: translate(-50%, -100%);

		&:hover {
			color: ${(props) => props.theme.palette.white};
			border: 1px solid ${(props) => props.theme.palette.white};
		}
	}
`;
