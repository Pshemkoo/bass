import styled from 'styled-components';
import { AccordionSummary, AccordionDetails } from '@material-ui/core';

export const Summary = styled(AccordionSummary)`
	&& {
		font-size: 18px;
		border-bottom: ${(props) => `1px solid ${props.theme.palette.grey}`};
	}
`;

export const Details = styled(AccordionDetails)`
	&& {
		padding: 16px;
	}
`;
