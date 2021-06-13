import { BaseSyntheticEvent } from 'react';
import * as Styled from './styles';

type Props = {
	submitBtnLabel: string;
	onSubmit: (
		e?: BaseSyntheticEvent<object, any, any> | undefined
	) => Promise<void>;
};

const BaseForm: React.FC<Props> = ({ children, submitBtnLabel, onSubmit }) => (
	<Styled.Form role="form" onSubmit={onSubmit}>
		{children}
		<Styled.SubmitBtn colorVariant="white" type="submit" variant="outlined">
			{submitBtnLabel}
		</Styled.SubmitBtn>
	</Styled.Form>
);

export default BaseForm;
