import { FieldError, useController } from 'react-hook-form';

import Field, { Props as FieldProps } from '@/components/controls/select-field';
import { Flex } from '@/styles';
import ErrorMessage from '../error-message';
import { FormControlProps } from '../types';

type Props = FormControlProps & Partial<FieldProps>;

const SelectField = ({
	control,
	name,
	label,
	keyProperty = 'name',
	options,
	multiple,
}: Props) => {
	const { field, fieldState } = useController({
		name,
		control,
		defaultValue: multiple
			? []
			: {
					[keyProperty as string]: '',
			  },
	});

	const handleFieldChange = (value: unknown) => {
		field.onChange(value);
	};

	const handleClearField = () => {
		field.onChange(
			multiple
				? []
				: {
						[keyProperty as string]: '',
				  }
		);
	};

	return (
		<Flex direction="column">
			<Field
				{...field}
				label={label}
				value={field.value}
				multiple={multiple}
				onClearValue={handleClearField}
				options={options as []}
				onChange={handleFieldChange}
			/>
			{fieldState.error && fieldState.error[keyProperty as keyof FieldError] && (
				<ErrorMessage>
					{
						(fieldState.error[keyProperty as keyof FieldError] as {
							message: string;
						}).message
					}
				</ErrorMessage>
			)}
		</Flex>
	);
};

export default SelectField;
