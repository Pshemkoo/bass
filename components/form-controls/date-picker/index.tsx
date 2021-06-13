import React from 'react';
import { useController } from 'react-hook-form';
import {
	KeyboardDatePicker,
	KeyboardDatePickerProps,
} from '@material-ui/pickers';

import { Flex } from '@/styles';
import ErrorMessage from '../error-message';
import { FormControlProps } from '../types';

type Props = FormControlProps & Partial<KeyboardDatePickerProps>;

const DatePicker = ({ control, name, label, ...restProps }: Props) => {
	const {
		field: { ref, ...restField },
		fieldState,
	} = useController({
		name,
		control,
		defaultValue: null,
	});

	return (
		<Flex direction="column">
			<KeyboardDatePicker
				{...restProps}
				{...restField}
				innerRef={ref}
				disableToolbar
				minDateMessage=""
				variant="inline"
				invalidDateMessage=""
				format="dd/MM/yyyy"
				size="small"
				margin="none"
				label={label}
				inputVariant="outlined"
			/>
			{fieldState.error && (
				<ErrorMessage>{fieldState.error.message}</ErrorMessage>
			)}
		</Flex>
	);
};

export default DatePicker;
