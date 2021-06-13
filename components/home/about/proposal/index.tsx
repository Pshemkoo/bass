import * as Styled from './styles';

const Proposal: React.FC = ({ children }) => (
	<Styled.Wrapper>
		<Styled.StarIcon icon={['far', 'star']} />
		{children}
	</Styled.Wrapper>
);

export default Proposal;
