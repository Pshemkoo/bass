import { Accordion, AccordionProps } from '@material-ui/core';

import * as Styled from './styles';

type Props = {
	label: string;
} & Partial<AccordionProps>;

const AccordionSection: React.FC<Props> = ({
	label,
	children,
	defaultExpanded,
}) => (
	<Accordion defaultExpanded={defaultExpanded}>
		<Styled.Summary>{label}</Styled.Summary>
		<Styled.Details>{children}</Styled.Details>
	</Accordion>
);

export default AccordionSection;
