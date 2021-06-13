import RemoveGame from '@/components/games/remove-game';
import { Game } from '@/services/gameService';
import GameForm from '@/components/games/game-form';
import SpinnerControl from '@/components/shared/spinner-control';
import { useRequestStatusContext } from '@/providers/request-status';
import BasePanel from '../base-panel';
import AccordionSection from '../accordion-section';

type Props = {
	game: Game;
};

const GamePanel: React.FC<Props> = ({ game }) => {
	const { state } = useRequestStatusContext();
	return (
		<BasePanel firstDefaultExpanded={false}>
			<AccordionSection label="Edycja gry">
				{state.fetchCategories === 'RESOLVED' ? (
					<GameForm isEditMode defaultValues={game} />
				) : (
					<SpinnerControl isLoading />
				)}
			</AccordionSection>
			<AccordionSection label="Usuń grę">
				<RemoveGame />
			</AccordionSection>
		</BasePanel>
	);
};

export default GamePanel;
