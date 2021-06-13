import styled from 'styled-components';
import MUIButton from '@material-ui/core/Button';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-width: 550px;
	margin: 48px auto 0 auto;
`;

export const Title = styled.h2`
	font-weight: 500;
	margin-top: 0;
`;

export const List = styled.ul`
	margin-bottom: 24px;
	margin-top: 0;
	text-align: left;
	list-style: none;
	padding: 0;
`;

export const Button = styled(MUIButton)`
	align-self: center;
`;
