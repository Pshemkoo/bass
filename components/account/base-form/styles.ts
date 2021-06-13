import styled from 'styled-components';

import Button from '@/components/controls/button';

export const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 16px;
	margin: 12px 0;
	width: 100%;
`;

export const SubmitBtn = styled(Button)`
	&& {
		margin-top: 12px;
	}
`;
