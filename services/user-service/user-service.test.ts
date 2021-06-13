import userService from './index';

// { firstName: 'Adam', lastName: 'Jhonson' }
const sampleToken =
	'eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJBZGFtIiwibGFzdE5hbWUiOiJKaG9uc29uIn0.54eXDXQ1wvHZX27qicJjBT9g0MogTd8HJnHrh9mlLHo';

describe('User service', () => {
	test('Parse JWT token', () => {
		const token = userService.parseJWTToken(sampleToken);
		expect(token).toStrictEqual({
			firstName: 'Adam',
			lastName: 'Jhonson',
		});
	});
});
