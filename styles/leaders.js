import styled from "styled-components";
import theme from "../theme";

export const StripeWrapper = styled.div`
	position: relative;
`;

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
	transform-origin: 0 50%;

	position: absolute;
	transform: translateX(50%);
	left: -${theme.gutter}px;
	top: 0;
	width: 100%;
	max-width: 400px;

	img {
		display: block;
		width: 100%;

		/* -webkit-mask-image: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(rgba(0, 0, 0, 1)),
			to(rgba(0, 0, 0, 0))
		); */
		mask-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 1) 75%,
			rgba(0, 0, 0, 0) 100%
		);

		${theme.breakpoint("lg")`
			mask-image: linear-gradient(
				-190deg,
				rgba(0, 0, 0, 1) 55%,
				rgba(0, 0, 0, 0) 80%
			);
		`}
	}

	${theme.breakpoint("md")`
        max-width: none;
        transform: none;
        left: 0;
        position: relative;
        grid-column: 1 / 8;
    `}

	${theme.breakpoint("lg")`margin-top: -100px; grid-column: 1 / 6;
	`}
`;

export const Gradient = styled.div`
	display: none;

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

export const Columns = styled.div.attrs({ "data-role": "columns" })`
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
		top: -75px;
		margin: 0;
		column-count: 2;
	`}

	${theme.breakpoint("xl")`grid-column: 7 / -1;`}

	div {
		display: inline-block;
		break-inside: avoid;
		margin-bottom: ${theme.gutter * 2}px;
	}
`;
