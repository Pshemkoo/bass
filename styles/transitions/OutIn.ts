import styled from 'styled-components';

export const OutIn = styled.div`
	width: 100%;

	&.out-in-enter {
		opacity: 0;
		transform: scale(0.9);
	}

	&.out-in-enter-active {
		opacity: 1;
		transform: translateX(0);
		transition: opacity 300ms, transform 300ms;
	}

	&.out-in-exit {
		opacity: 1;
	}

	&.out-in-exit-active {
		opacity: 0;
		transform: scale(0.9);
		transition: opacity 300ms, transform 300ms;
	}
`;
