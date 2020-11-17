import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.div`
	grid-column: span 6;
	position: relative;

	${theme.breakpoint("lg")`
		grid-column: ${({ large }) => (large ? `span 6` : `span 4`)};

		&:last-child:nth-child(odd) {
			${({ large }) => large && `grid-column: 4 / 10`}
		}
	`}
`;
export const Image = styled.div`
	padding-top: 60%;

	background-image: url("${({ src }) => src}");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	margin-bottom: ${theme.gutter}px;
`;
export const Body = styled.div`
	padding: ${theme.gutter}px ${theme.gutter}px 0;
	box-sizing: border-box;
`;
