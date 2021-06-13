import Image from 'next/image';

import * as Styled from './styles';

type Props = {
	onClick: () => void;
};

const Logo: React.FC<Props> = ({ onClick }) => (
	<Styled.Wrapper onClick={onClick}>
		<Image
			src="/assets/logo.png"
			width={36}
			height={24}
			alt="BAS Gaming Company"
		/>
		<Styled.Title>BAS Gaming</Styled.Title>
	</Styled.Wrapper>
);

export default Logo;
