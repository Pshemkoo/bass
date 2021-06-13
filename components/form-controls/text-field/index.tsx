import { useController } from 'react-hook-form';

import Field, { Props as FieldProps } from '@/components/controls/text-field';
import { Flex } from '@/styles';
import ErrorMessage from '../error-message';
import { FormControlProps } from '../types';

type Props = FormControlProps & FieldProps;

const TextField: React.FC<Props> = ({ control, name, label, ...rest }) => {
	const { field, fieldState } = useController({
		name,
		control,
		defaultValue: '',
	});

	return (
		<Flex direction="column">
			<Field label={label} {...field} {...rest} />
			{fieldState.error && (
				<ErrorMessage>{fieldState.error.message}</ErrorMessage>
			)}
		</Flex>
	);
};

export default TextField;
