export function pick<T>(key: keyof T) {
	return (input: T) =>
		input !== null && input !== undefined ? input[key] : undefined;
}
