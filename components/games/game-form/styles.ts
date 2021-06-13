import styled from 'styled-components';

import Button from '@/components/controls/button';

export const Form = styled.form`
	display: grid;
	row-gap: 16px;
	width: 100%;
`;

export const SubmitButton = styled(Button)`
	&& {
		justify-self: start;
		margin-top: 8px;
	}
`;
