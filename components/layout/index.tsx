import Footer from '../footer';
import TopNav from '../top-nav';

import * as Styled from './styles';

const Layout: React.FC = ({ children }) => (
	<Styled.Wrapper>
		<TopNav />
		<Styled.Content>{children}</Styled.Content>
		<Footer />
	</Styled.Wrapper>
);

export default Layout;
