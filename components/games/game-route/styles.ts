import styled from 'styled-components';
import MUIRating from '@material-ui/lab/Rating';

export const Wrapper = styled.div`
	padding: 32px 0;
`;

export const Details = styled.div`
	display: flex;
`;

export const Figure = styled.figure`
	box-shadow: 0px 0px 6px 0px rgb(0 0 0 / 50%);
	width: 300px;
	margin: 0;
	border-radius: 4px;
	overflow: hidden;
	margin-right: 24px;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
`;

export const TextContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Title = styled.h1`
	font-size: 28px;
	margin: 0 0 14px;
`;

export const Rating = styled(MUIRating)`
	&& {
		margin-bottom: 14px;
	}
`;

export const Date = styled.span`
	svg {
		margin-right: 8px;
	}
`;

export const Description = styled.p``;
