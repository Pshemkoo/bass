import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';

import TextField from '@/components/form-controls/text-field';
import DatePicker from '@/components/form-controls/date-picker';
import Yup from '@/plugins/yup';
import {
	fieldIsRequired,
	invalidFieldFormat,
} from 'constants/formValidationMessages';
import gameService, { Game } from '@/services/gameService';
import SpinnerControl from '@/components/shared/spinner-control';
import useLoading from '@/hooks/useLoading';
import { useGameContext } from '@/providers/game';
import toastService from '@/services/toastService';
import SelectField from '@/components/form-controls/select-field';

import * as Styled from './styles';

const validationSchema = Yup.object().shape({
	title: Yup.string().required(fieldIsRequired('tytuł')),
	description: Yup.string().required(fieldIsRequired('opis')),
	releaseDate: Yup.date()
		.nullable()
		.required(fieldIsRequired('data wydania'))
		.typeError(invalidFieldFormat()),
	url: Yup.string().required(fieldIsRequired('link do zdjęcia')),
	category: Yup.object().shape({
		name: Yup.string().required(fieldIsRequired('kategoria')),
	}),
});

type Props = {
	isEditMode?: boolean;
	defaultValues?: Game;
};

const GameForm: React.FC<Props> = ({ isEditMode, defaultValues = {} }) => {
	const { isLoading, asyncLoadingChange } = useLoading();
	const { control, handleSubmit } = useForm<FieldValues>({
		resolver: yupResolver(validationSchema),
		defaultValues,
	});
	const { fetchGames, state, setGame } = useGameContext();

	const createGame = async ({ category, ...rest }: Game) => {
		try {
			await asyncLoadingChange(() =>
				gameService.create({
					...rest,
					categoryId: category.id,
				})
			);
			fetchGames(state.filters);
			toastService.success('Gra została dodana pomyślnie');
		} catch (error) {
			toastService.error('Gra nie została dodana pomyślnie');
		}
	};

	const updateGame = async (game: Game) => {
		try {
			const { category, ...rest } = game;
			await asyncLoadingChange(() =>
				gameService.update({
					...rest,
					categoryId: category.id,
				})
			);
			setGame(game);
			toastService.success('Gra została pomyślnie zmodyfikowana');
		} catch (error) {
			toastService.error('Gra nie została pomyślnie zmodyfikowana');
		}
	};

	const submitForm = (game: Game) => {
		if (isEditMode) {
			updateGame(game);
			return;
		}

		createGame(game);
	};

	return (
		<SpinnerControl isLoading={isLoading}>
			<Styled.Form onSubmit={handleSubmit(submitForm)}>
				<TextField control={control} name="title" label="Tytuł" size="small" />
				<TextField
					control={control}
					name="description"
					label="Opis"
					size="small"
					multiline
					rows={3}
				/>
				<SelectField
					control={control}
					name="category"
					label="Katgoria"
					options={state.categories}
				/>
				<DatePicker
					control={control}
					label="Data wydania"
					name="releaseDate"
					disableFuture
				/>
				<TextField
					control={control}
					name="url"
					label="Link do zdjęcia"
					size="small"
				/>
				<Styled.SubmitButton type="submit" variant="outlined">
					{isEditMode ? 'zapisz zmiany' : 'dodaj grę'}
				</Styled.SubmitButton>
			</Styled.Form>
		</SpinnerControl>
	);
};

export default GameForm;
