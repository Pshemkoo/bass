import styled from 'styled-components';

export const Wrapper = styled.nav`
	box-shadow: 0px -2px 6px 0px rgb(0 0 0 / 50%);
	position: fixed;
	top: 0;
	z-index: 999;
	left: 0;
	right: 0;
	background: #fff;
	padding: 18px 0;
`;

export const Header = styled.header`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	padding: 0;
	list-style: none;
	align-items: center;
`;

export const Links = styled.div`
	margin-left: 48px;

	&:nth-child(n) {
		margin-right: 24px;
	}
`;

export const WelcomeUser = styled.div`
	margin-left: auto;
	display: flex;
	align-items: center;
`;

export const Text = styled.span`
	padding-right: 12px;
`;
