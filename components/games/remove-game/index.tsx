import { useRouter } from 'next/router';

import Button from '@/components/controls/button';
import gameService from '@/services/gameService';
import SpinnerControl from '@/components/shared/spinner-control';
import useLoading from '@/hooks/useLoading';
import toastService from '@/services/toastService';

import * as Styled from './styles';

const RemoveGame = () => {
	const { query, back } = useRouter();
	const { isLoading, asyncLoadingChange } = useLoading();

	const handleDeleteGameClick = async () => {
		try {
			await asyncLoadingChange(() => gameService.delete(+(query.id as string)));
			toastService.success('Gra została usunięta pomyślnie');
			back();
		} catch (error) {
			toastService.error('Błąd podczas usuwania gry, spróbuj później.');
		}
	};

	return (
		<SpinnerControl isLoading={isLoading}>
			<Styled.Wrapper>
				Czy na pewno chcesz usunąć grę?
				<br />
				Po wykonaniu operacji nie ma możliwości przywrócenia gry
				<Styled.ButtonGroup>
					<Button
						variant="outlined"
						colorVariant="error"
						onClick={handleDeleteGameClick}
					>
						Potwierdź
					</Button>
				</Styled.ButtonGroup>
			</Styled.Wrapper>
		</SpinnerControl>
	);
};
export default RemoveGame;
