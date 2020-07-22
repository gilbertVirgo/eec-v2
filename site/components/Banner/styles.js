import Badge from "../Badge";
import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.div`
	background-image: url(${({ src }) => src});
	background-size: cover;
	${theme.map(
		{
			xs: 425,
			sm: 475,
			md: 525,
			lg: 575,
			xl: 625,
		},
		(minHeight) => `min-height: ${minHeight}px`
	)};
	display: flex;
	justify-content: center;
	align-items: center;

	box-sizing: border-box;
	padding: 75px 0;
`;

export const Body = styled.div`
	color: white;
	grid-column: 1 / -1;
	${theme.breakpoint("md")`
		${({ center }) => (center ? `grid-column: 4 / -4` : `grid-column: 1 / 7;`)}
	`}
	${theme.breakpoint("lg")`
		${({ center }) => (center ? `grid-column: 5 / -5` : `grid-column: 2 / 7;`)}
	`}
`;

export const BadgeWrapper = styled(Badge)`
	grid-column: 1 / -1;
	${theme.breakpoint("sm")`grid-column: 2 / -2`}
	${theme.breakpoint("md")`grid-column: 4 / -4`}
	${theme.breakpoint("lg")`grid-column: 5 / -5`}
`;
