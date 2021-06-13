import styled from 'styled-components';

import Button from '@/components/controls/button';

export const Wrapper = styled.div`
	margin-bottom: 24px;
	max-width: 600px;
`;

export const Title = styled.h3`
	margin: 0 0 16px;
	font-weight: 500;
`;

export const Controls = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 14px;
	max-width: 600px;
`;

export const Label = styled.span`
	font-size: 14px;
	padding-top: 6px;
	color: ${(props) => props.theme.palette.lightDark};
`;

export const SubmitBtn = styled(Button)`
	&& {
		margin-left: auto;
		grid-column: 3;
		grid-column-start: 1;
		grid-column-end: 3;
	}
`;
