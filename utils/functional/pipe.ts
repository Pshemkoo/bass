export function pipe(...fns: any[]) {
	return (x?: any) => fns.reduce((y, fn) => fn(y), x);
}
