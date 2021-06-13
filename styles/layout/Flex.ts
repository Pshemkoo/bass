import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type Props = {
	direction?: 'row' | 'column';
	maxHeight?: boolean;
};

export const Flex = styled(motion.div)<Props>`
	display: flex;
	width: 100%;

	${(props) =>
		props.direction === 'column' &&
		css`
			flex-direction: column;
		`}

	${(props) =>
		props.maxHeight &&
		css`
			flex-direction: column;
			flex: 1;
		`}
`;
