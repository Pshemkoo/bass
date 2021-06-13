import { Control } from 'react-hook-form';

import { ControlProps } from '../controls/types';

export interface FormControlProps extends ControlProps {
	control: Control;
	name: string;
}
