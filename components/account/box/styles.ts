import styled from 'styled-components';

export const Wrapper = styled.div`
	border-radius: 4px;
	background-image: url('/assets/login-background.jpg');
	width: 100%;
	flex: 1;
	background-size: cover;
	background-position: center;
	position: relative;
	z-index: 0;
	margin-bottom: -48px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: #112416;
		opacity: 0.7;
		z-index: -1;
	}
`;

export const FormWrapper = styled.div`
	margin: 60px auto;
	width: 1200px;
	flex: 1;
	border: 3px solid #c6c6c6;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #eee;
	padding: 32px;
	box-sizing: border-box;
	justify-content: center;
`;

export const FormContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 350px;
`;
