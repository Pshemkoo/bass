import styled from 'styled-components';
import MUIRating from '@material-ui/lab/Rating';

export const More = styled.span`
	cursor: pointer;
	font-size: 12px;
	text-decoration: none;
	position: absolute;
	bottom: 8px;
	right: 8px;
	opacity: 0;
	transition: opacity 0.3s ease;

	svg {
		margin-left: 8px;
	}
`;

export const Wrapper = styled.div`
	border-radius: 6px;
	box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%);
	padding: 12px;
	display: flex;
	transition: box-shadow 0.3s ease;

	&:hover {
		box-shadow: 0px 1px 4px 0px rgb(0 0 0 / 30%);
	}
`;

export const ImageSection = styled.aside`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export const Rating = styled(MUIRating)`
	display: flex;
	justify-content: center;
`;

export const ImageWrapper = styled.figure`
	border-radius: 50%;
	overflow: hidden;
	margin: 0;
	min-width: 150px;
	max-width: 150px;
	margin-bottom: 8px;
`;

export const Content = styled.div`
	flex: 3;
	margin-left: 24px;
	display: flex;
	flex-direction: column;
	position: relative;

	&:hover {
		${More} {
			opacity: 1;
			text-decoration: underline;
		}
	}
`;

export const Category = styled.span`
	letter-spacing: 2px;
	font-size: 12px;
	padding: 4px 8px;
	border-radius: 4px;
	margin: auto 0 0;
	background-color: ${(props) => props.theme.palette.lightDark};
	color: ${(props) => props.theme.palette.white};
	margin-right: auto;
	text-transform: uppercase;
`;

export const Title = styled.h3`
	font-weight: 500;
	margin: 0 0 8px;
`;

export const Description = styled.p`
	line-height: 1.25rem;
	font-size: 14px;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-word;
	max-height: 80px;
	margin: 12px 0;
`;

export const ReleaseDate = styled.span`
	font-size: 12px;
	color: ${(props) => props.theme.palette.lightDark};

	svg {
		margin-right: 4px;
	}
`;
