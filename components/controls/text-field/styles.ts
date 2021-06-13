import styled, { css } from 'styled-components';
import MUITextField from '@material-ui/core/TextField';

import { ColorVariant } from '@/plugins/theme';

type Props = {
	$colorVariant: ColorVariant;
};

export const TextField = styled(MUITextField)<Props>`
	&& {
		${(props) =>
			props.$colorVariant === 'white' &&
			css`
				.MuiInputBase-root {
					color: ${(props) => props.theme.palette.white};
					border-color: ${(props) => props.theme.palette.grey} !important;
				}

				.MuiInputLabel-formControl {
					color: ${(props) => props.theme.palette.grey} !important;
				}

				fieldset {
					border-color: ${(props) => props.theme.palette.grey} !important;
				}
			`}

		${(props) =>
			props.$colorVariant === 'dark' &&
			css`
				color: ${(props) => props.theme.palette.lightDark} !important;
				border-color: ${(props) => props.theme.palette.lightDark} !important;
			`}
	}
`;
