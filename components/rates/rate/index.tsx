import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from '@material-ui/lab/Rating';
import { format } from 'date-fns';

import * as Styled from './styles';

type Props = {
	comment: string;
	rate: number;
	date: string;
	user: string;
};

const Rate: React.FC<Props> = ({ comment, date, user, rate }) => (
	<Styled.Wrapper>
		<Styled.Rate>
			<Styled.RateTitle>Ocena:</Styled.RateTitle>
			<Rating value={rate} readOnly size="medium" />
		</Styled.Rate>
		<Styled.Content>
			<Styled.Author>{user}:</Styled.Author>
			<Styled.Date>
				<FontAwesomeIcon icon={['far', 'calendar-alt']} />
				{format(new Date(date), 'dd/MM/yyyy')}
			</Styled.Date>
			<Styled.Text>{comment}</Styled.Text>
		</Styled.Content>
	</Styled.Wrapper>
);

export default Rate;
