import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import * as Styled from './styles';

type Props = {
	href: string;
};

const Link: React.FC<Props> = ({ children, ...props }) => {
	const { asPath } = useRouter();

	const isActive = asPath === props.href;

	return (
		<NextLink {...props}>
			<Styled.Wrapper isActive={isActive}>{children}</Styled.Wrapper>
		</NextLink>
	);
};

export default Link;
