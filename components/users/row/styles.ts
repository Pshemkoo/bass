import styled from 'styled-components';

import SelectField from '@/components/controls/select-field';

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 0;
	width: 100%;
`;

export const Login = styled.h4`
	margin: 0;
`;

export const Dropdown = styled(SelectField)`
	&& {
		min-width: 160px;
	}
`;
