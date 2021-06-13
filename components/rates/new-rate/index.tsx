import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';

import TextField from '@/components/controls/text-field';
import { useGameContext } from '@/providers/game';
import { useUserContext } from '@/providers/user';

import { useRequestStatusContext } from '@/providers/request-status';
import SpinnerControl from '@/components/shared/spinner-control';

import * as Styled from './styles';

type Props = {
	gameId: number;
};

const NewRate: React.FC<Props> = ({ gameId }) => {
	const [rate, setRate] = useState(0);
	const [comment, setComment] = useState('');
	const { addNewRate } = useGameContext();
	const { state } = useUserContext();
	const { state: requestState } = useRequestStatusContext();

	const handleRateChange = (
		_event: React.ChangeEvent<{}>,
		value: number | null
	) => {
		setRate(value as number);
	};

	const handleCommentChange = ({
		target,
	}: React.ChangeEvent<HTMLTextAreaElement>) => {
		setComment(target.value);
	};

	const handleAddCommentClick = () => {
		addNewRate(gameId, {
			comment,
			rate,
			date: new Date().toDateString(),
			user: state.firstName,
		});
	};

	return (
		<Styled.Wrapper>
			<SpinnerControl isLoading={requestState.addNewRate === 'PENDING'}>
				<Styled.Title>Dodaj nowy komentarz</Styled.Title>
				<Styled.Controls>
					<Styled.Label>Ocena:</Styled.Label>
					<Rating
						value={rate}
						name="new comment rating"
						onChange={handleRateChange}
						precision={0.5}
					/>
					<Styled.Label>Komentarz:</Styled.Label>
					<TextField
						size="small"
						multiline
						rows={3}
						onChange={handleCommentChange}
						value={comment}
						placeholder="Wpisz treść komentarza"
					/>
					<Styled.SubmitBtn
						variant="outlined"
						colorVariant="dark"
						onClick={handleAddCommentClick}
					>
						dodaj
					</Styled.SubmitBtn>
				</Styled.Controls>
			</SpinnerControl>
		</Styled.Wrapper>
	);
};

export default NewRate;
