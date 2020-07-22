import styled from "styled-components";
import theme from "../../theme";

export const BadgeWrapper = styled.div`
	grid-column: 4 / -1;
	grid-row: 1;
	z-index: 1;

	${theme.breakpoint("md")`
        grid-column: 1 / 5; 
        margin-top: 275px
    `}
	${theme.breakpoint("lg")`grid-column: 1 / 4`}
	${theme.breakpoint("xl")`grid-column: 2 / 5`}
`;

export const ImageWrapper = styled.div`
	grid-row: 1;
	z-index: 0;

	position: absolute;
	transform: translateX(50%);
	left: -50vw;
	top: 0;
	width: 100%;
	max-width: 400px;

	img {
		display: block;
		width: 100%;
	}

	${theme.breakpoint("md")`
        max-width: none;
        transform: none;
        left: 0;
        position: relative;
        grid-column: 1 / 8;
    `}

	${theme.breakpoint("lg")`grid-column: 1 / 6;`}
`;

export const Gradient = styled.div`
	position: absolute;
	left: 0;
	top: 0;

	background: ${({ color }) =>
		`linear-gradient(180deg, rgba(100, 105, 75, 0) 0%, ${color} 85%)`};
	background-size: 100% 100%;
	width: 100%;
	height: 100%;

	${theme.breakpoint("lg")`display: none`}
`;

export const Columns = styled.div`
	margin-top: 260px;
	margin-bottom: 40px;
	position: relative;
	z-index: 1;
	grid-column: 1 / -1;
	column-gap: ${theme.gutter}px;

	${theme.breakpoint("md")`
		grid-column: 5 / -1;
		margin: 0 0 50px;
		grid-row: 1;
    `}

	${theme.breakpoint("lg")`
		max-height: none;
		column-count: 2;
	`}

	${theme.breakpoint("xl")`grid-column: 7 / -1;`}

	div {
		display: inline-block;
		break-inside: avoid;
		margin-bottom: ${theme.gutter * 2}px;
	}
`;
