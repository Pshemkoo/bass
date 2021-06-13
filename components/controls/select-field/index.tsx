import React, { useEffect, useMemo, useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { SelectProps } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { pick } from '@/utils/functional';
import { ControlProps } from '../types';

import * as Styled from './styles';

export type Props = {
	options: any[];
	keyProperty?: string;
	value: unknown[] | Record<string, unknown> | string;
	onChange: (value: unknown) => void;
	onClearValue?: () => void;
} & ControlProps &
	Partial<SelectProps>;

const SelectField = React.forwardRef(
	(
		{
			label,
			className,
			keyProperty = 'name',
			options,
			onClearValue,
			onChange,
			value,
			multiple,
			...rest
		}: Props,
		ref
	) => {
		const [items, setItems] = useState<string[]>([]);
		const [itemsDict, setItemsDict] = useState<Record<string, unknown>>({});

		useEffect(() => {
			if (keyProperty) {
				setItems(options.map(pick(keyProperty)) as string[]);
				setItemsDict(
					options.reduce(
						(acc, curr: Record<string, unknown>) => ({
							...acc,
							[curr[keyProperty] as string]: curr,
						}),
						{}
					)
				);
			} else {
				setItems(options as string[]);
				setItemsDict(
					options.reduce(
						(acc, curr: string) => ({
							...acc,
							[curr]: curr,
						}),
						{}
					)
				);
			}
		}, [options, keyProperty]);

		const selectedValues = useMemo(
			() =>
				multiple
					? (value as []).map((item) =>
							keyProperty ? item[keyProperty] : item
					  )
					: keyProperty
					? (value as Record<string, unknown>)[keyProperty]
					: value,
			[value, multiple, keyProperty]
		);

		const handleValueChange = (
			event: React.ChangeEvent<{
				name?: string | undefined;
				value: unknown;
			}>
		) => {
			const { value } = event.target;
			if (multiple) {
				const multipleValues = (value as []).map((key) => itemsDict[key]);
				onChange(multipleValues);
				return;
			}

			onChange(itemsDict[value as string]);
		};

		return (
			<Styled.Control className={className} variant="outlined" size="small">
				<Styled.Label>{label}</Styled.Label>
				{onClearValue && (
					<Styled.ClearButton size="small" onClick={onClearValue}>
						<FontAwesomeIcon icon={['far', 'times-circle']} />
					</Styled.ClearButton>
				)}
				<Styled.SelectField
					innerRef={ref}
					multiple={multiple}
					value={items.length ? selectedValues : ''}
					onChange={handleValueChange}
					label={label}
					{...rest}
				>
					{items.map((item) => (
						<MenuItem key={item} value={item}>
							{item}
						</MenuItem>
					))}
				</Styled.SelectField>
			</Styled.Control>
		);
	}
);

export default SelectField;
