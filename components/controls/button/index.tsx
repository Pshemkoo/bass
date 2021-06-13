import { ColorVariant } from '@/plugins/theme';
import { ButtonProps } from '@material-ui/core';

import * as Styled from './styles';

type Variant = ColorVariant | 'error';

type Props = {
	colorVariant?: Variant;
} & Partial<ButtonProps>;

const Button: React.FC<Props> = ({
	children,
	colorVariant = 'dark',
	...rest
}) => (
	<Styled.Button {...rest} $colorVariant={colorVariant}>
		{children}
	</Styled.Button>
);

export default Button;
