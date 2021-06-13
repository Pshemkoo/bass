import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import TextField from '@/components/form-controls/text-field';
import Yup from '@/plugins/yup';
import {
	fieldIsRequired,
	fieldsMustMatch,
} from '@/constants/formValidationMessages';
import userService, { UserRegistration } from 'services/user-service';
import SpinnerControl from '@/components/shared/spinner-control';
import useLoading from '@/hooks/useLoading';
import toastService from '@/services/toastService';
import BaseForm from '../base-form';

const validationSchema = Yup.object().shape({
	username: Yup.string().required(fieldIsRequired('nazwa użytkownika')),
	email: Yup.string().email().required(fieldIsRequired('email')),
	password: Yup.string().required(fieldIsRequired('hasło')),
	passwordConfirmation: Yup.string().when('password', {
		is: (val: string) => val && val.length > 0,
		then: Yup.string()
			.oneOf([Yup.ref('password')], fieldsMustMatch('hasło', 'powtórz hasło'))
			.required(fieldIsRequired('powtórz hasło')),
	}),
});

const RegistrationForm = () => {
	const { control, handleSubmit } = useForm({
		resolver: yupResolver(validationSchema),
	});
	const { isLoading, asyncLoadingChange } = useLoading();

	const submitForm = async (values: UserRegistration) => {
		try {
			await asyncLoadingChange(() => userService.register(values));
			toastService.success('Rejestracja zakończona pomyślnie');
		} catch (error) {
			toastService.error('Rejestracja zakończona niepomyślnie');
		}
	};

	return (
		<SpinnerControl isLoading={isLoading} colorVariant="white">
			<BaseForm
				submitBtnLabel="załóż konto"
				onSubmit={handleSubmit(submitForm)}
			>
				<TextField
					control={control}
					colorVariant="white"
					label="Nazwa użytkownika"
					name="username"
				/>
				<TextField
					name="email"
					label="Email"
					control={control}
					colorVariant="white"
					type="email"
				/>
				<TextField
					name="firstName"
					label="Imię"
					control={control}
					colorVariant="white"
				/>
				<TextField
					name="lastName"
					label="Nazwisko"
					control={control}
					colorVariant="white"
				/>
				<TextField
					control={control}
					colorVariant="white"
					label="Hasło"
					name="password"
					type="password"
				/>
				<TextField
					control={control}
					colorVariant="white"
					label="Powtórz hasło"
					name="passwordConfirmation"
					type="password"
				/>
			</BaseForm>
		</SpinnerControl>
	);
};

export default RegistrationForm;
