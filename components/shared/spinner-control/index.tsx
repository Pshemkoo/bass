import { ColorVariant } from '@/plugins/theme';
import Spinner from '../spinner';

import * as Styled from './styles';

type Props = {
	isLoading: boolean;
	colorVariant?: ColorVariant;
};

const SpinnerControl: React.FC<Props> = ({
	children,
	isLoading,
	colorVariant,
}) => {
	if (isLoading) {
		return (
			<Styled.Wrapper>
				<Spinner colorVariant={colorVariant} />
			</Styled.Wrapper>
		);
	}

	return <>{children}</>;
};

export default SpinnerControl;
