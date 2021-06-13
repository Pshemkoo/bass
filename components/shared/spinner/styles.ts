import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';
import { ColorVariant } from '@/plugins/theme';

type Props = {
	$colorVariant: ColorVariant;
};

export const Spinner = styled(CircularProgress)<Props>`
	&& {
		color: ${(props) => props.theme.palette[props.$colorVariant]};
	}
`;
