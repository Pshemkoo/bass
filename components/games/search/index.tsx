import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';

import TextField from '@/components/form-controls/text-field';
import SelectField from '@/components/form-controls/select-field';
import { useGameContext } from '@/providers/game';

import { Category } from '@/services/gameService';
import pubSub from '@/utils/pubSub';

import * as Styled from './styles';

type FormValues = {
	category: Category;
	title: string;
	description: string;
};

const Search = () => {
	const [areFiltersOpened, setAreFiltersOpened] = useState(false);
	const { control, handleSubmit, register } = useForm();
	const { state, fetchGames, setFilters } = useGameContext();

	const handleOpenFiltersClick = () => {
		setAreFiltersOpened((state) => !state);
	};

	const submitForm = ({ category, ...values }: FormValues) => {
		const payload = {
			...values,
			category: category?.name,
		};
		setFilters(payload);
		fetchGames(payload);
		pubSub.publish('searchClick');
	};

	return (
		<Styled.Wrapper>
			<form onSubmit={handleSubmit(submitForm)}>
				<Styled.Label>Wyszukaj grę</Styled.Label>
				<Styled.ControlGroup>
					<Styled.Input
						{...register('title')}
						type="text"
						placeholder="Tytuł"
					/>
					<Styled.Button type="submit">
						<FontAwesomeIcon icon={['fas', 'search']} />
					</Styled.Button>
					<Styled.RoundedBtn
						isExpanded={areFiltersOpened}
						onClick={handleOpenFiltersClick}
						type="button"
					>
						<FontAwesomeIcon icon={['fas', 'filter']} />
					</Styled.RoundedBtn>
				</Styled.ControlGroup>
				{areFiltersOpened && (
					<Styled.FilterWrapper>
						<TextField
							size="small"
							control={control}
							name="description"
							label="Opis"
						/>
						<SelectField
							name="category"
							options={state.categories}
							label="Kategoria"
							control={control}
						/>
					</Styled.FilterWrapper>
				)}
			</form>
		</Styled.Wrapper>
	);
};

export default Search;
