import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Game } from '@/services/gameService';

import * as Styled from './styles';

type Props = Game;

const GameRoute: React.FC<Props> = ({
	averageRate,
	description,
	releaseDate,
	title,
	url,
}) => (
	<Styled.Wrapper>
		<Styled.Details>
			<Styled.Figure>
				<Styled.Image src={url} alt="present game in graphic" />
			</Styled.Figure>
			<Styled.TextContent>
				<Styled.Title>{title}</Styled.Title>
				<Styled.Rating value={averageRate} readOnly size="large" />
				<Styled.Date>
					<FontAwesomeIcon icon={['far', 'calendar-alt']} />
					{format(new Date(releaseDate), 'dd/MM/yyyy')}
				</Styled.Date>
				<Styled.Description>{description}</Styled.Description>
			</Styled.TextContent>
		</Styled.Details>
	</Styled.Wrapper>
);

export default GameRoute;
