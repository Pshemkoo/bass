import styled from 'styled-components';
import { Select, IconButton, FormControl, InputLabel } from '@material-ui/core';

export const SelectField = styled(Select)``;

export const ClearButton = styled(IconButton)`
	&& {
		display: none;
		position: absolute;
		top: 50%;
		right: 28px;
		transform: translateY(-50%);
		z-index: 1;
		padding: 8px;
	}
`;

export const Control = styled(FormControl)`
	&:hover {
		${ClearButton} {
			display: block;
		}
	}
`;

export const Label = styled(InputLabel)`
	&& {
		padding: 0 5px;
		margin-left: -5px;
	}
`;
