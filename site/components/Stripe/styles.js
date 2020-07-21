import { Badge as DefaultBadge } from "../Badge/Badge";
import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.div.attrs({
	className: "lax",
	"data-lax-opacity": "200 1, 100 1, 0 0",
	"data-lax-anchor": "self",
})`
	display: flex;
	justify-content: center;
	padding: 50px 0 0;
	box-sizing: border-box;
	transform: skewY(-20deg);

	${({ expands }) => (expands ? `min-height: 600px` : `height: 600px`)};

	background: url("/assets/images/noise.png") repeat, ${({ color }) => color};

	.container {
		transform: skewY(20deg);
	}

	${theme.breakpoint("md")`
		padding: 75px 0 0;
        transform: skewY(-10deg);

        .container {
            transform: skewY(10deg);
        }
    `}

	${theme.breakpoint("lg")`min-height: none; height: 600px`}

	${theme.map(
		{ xs: 150, sm: 200, md: 250, lg: 300, xl: 350 },
		(marginBottom) => `margin-bottom: ${marginBottom}px;`
	)}
`;

export const BadgeWrapper = styled.div`
	grid-column: 1 / -1;
	margin-bottom: ${theme.gutter * 2}px;

	${theme.breakpoint("sm")`grid-column: 2 / -2;`}
	${theme.breakpoint("md")`grid-column: 4 / -4`}
	${theme.breakpoint("lg")`grid-column: 5 / -5`}
`;

export const Caption = styled.div`
	grid-column: 1 / -1;
	margin-bottom: ${theme.gutter}px;

	${theme.breakpoint("md")`grid-column: 1 / 7; margin-bottom: 0`}
	${theme.breakpoint("lg")`grid-column: 2 / 6`}
`;

export const Figure = styled.div`
	grid-column: 1 / -1;
	margin-bottom: ${theme.gutter}px;
	position: relative;

	img {
		max-width: 100%;
		display: block;
	}

	${theme.breakpoint("md")`grid-column: 7 / -1; margin-bottom: 0`}
`;
