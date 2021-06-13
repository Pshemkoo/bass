import React from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
import { ControlProps } from '../types';

import * as Styled from './styles';

export type Props = ControlProps & Partial<TextFieldProps>;

const TextField = React.forwardRef(
	({ label, className, colorVariant = 'dark', ...rest }: Props, ref) => (
		<Styled.TextField
			className={className}
			variant="outlined"
			innerRef={ref}
			label={label}
			$colorVariant={colorVariant}
			{...rest}
		/>
	)
);

export default TextField;
