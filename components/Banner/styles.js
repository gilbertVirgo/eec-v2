import Badge from "../Badge";
import { Container as DefaultContainer } from "..";
import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.div`
	overflow-x: hidden;
	position: relative;
	z-index: 1;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url(${({ src }) => src});
	background-size: cover;
	width: 100%;
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
	padding: ${theme.gutter * 3}px 0;
`;

export const Container = styled(DefaultContainer)`
	position: relative;
	z-index: 1;
`;

export const Overlay = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(50, 40, 0, 0.45);
`;

export const Frame = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: -1;
	filter: contrast(65%) hue-rotate(-10deg) brightness(75%);

	background-image: url(${({ src }) => src});
	background-size: cover;
	background-position: center;
	will-change: transform;
	transition: transform 1s;
	transform: ${({ delta }) => {
		if (delta < 0) return `translateX(-100%)`;
		if (delta > 0) return `translateX(100%)`;
		return `translateX(0)`;
	}};
`;

export const Body = styled.div`
	color: white;
	grid-column: 1 / -1;
	${theme.breakpoint("md")`
		${({ center }) => (center ? `grid-column: 4 / -4` : `grid-column: 1 / 7;`)}
	`}
	${theme.breakpoint("lg")`
		${({ center }) => (center ? `grid-column: 5 / -5` : `grid-column: 2 / 6;`)}
	`}
`;

export const BadgeWrapper = styled(Badge)`
	grid-column: 1 / -1;
	${theme.breakpoint("sm")`grid-column: 2 / -2`}
	${theme.breakpoint("md")`grid-column: 4 / -4`}
	${theme.breakpoint("lg")`grid-column: 5 / -5`}
`;

export const DotWrapper = styled.div`
	position: relative;
	z-index: 100;
	grid-column: 1 / -1;
	height: 50px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const Dot = styled.div`
	border-radius: 8px;
	width: 8px;
	height: 8px;
	margin: 0 ${theme.gutter}px;
	background-color: white;
	will-change: opacity;
	transition: opacity 0.3s;
	opacity: ${({ active }) => (active ? "1" : "0.5")};
	cursor: pointer;
`;
