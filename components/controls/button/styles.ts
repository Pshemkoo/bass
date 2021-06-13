import styled, { css } from 'styled-components';
import { Button as Btn } from '@material-ui/core';

import { ColorVariant } from '@/plugins/theme';

type Props = {
	$colorVariant: ColorVariant | 'error';
};

export const Button = styled(Btn)<Props>`
	&& {
		${(props) =>
			props.$colorVariant === 'white' &&
			css`
				color: ${(props) => props.theme.palette.grey} !important;
				border-color: ${(props) => props.theme.palette.grey} !important;
			`}

		${(props) =>
			props.$colorVariant === 'dark' &&
			css`
				color: ${(props) => props.theme.palette.lightDark} !important;
				border-color: ${(props) => props.theme.palette.lightDark} !important;
			`}

			${(props) =>
			props.$colorVariant === 'error' &&
			css`
				color: ${(props) => props.theme.palette.error} !important;
				border-color: ${(props) => props.theme.palette.error} !important;
			`}
	}
`;
