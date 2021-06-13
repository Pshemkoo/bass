import { pipe } from './pipe';
import { pick } from './pick';

export function path<T>(props: (keyof T)[]) {
	return pipe(...props.map(pick));
}
