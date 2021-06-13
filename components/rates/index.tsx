import { Rate as RateType } from '@/services/gameService';
import Rate from './rate';

import * as Styled from './styles';

type Props = {
	items: RateType[];
};

const Rates: React.FC<Props> = ({ items }) => (
	<Styled.Wrapper>
		{items.length > 0 && <Styled.Title>Komentarze:</Styled.Title>}
		{items.map((rate) => (
			<Rate key={rate.date} {...rate} />
		))}
	</Styled.Wrapper>
);

export default Rates;
