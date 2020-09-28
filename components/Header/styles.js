import { Container, Grid as DefaultGrid } from "..";

import styled from "styled-components";
import theme from "../../theme";

const barHeight = 100;

export const BannerText = styled.img.attrs({
	src: "/assets/images/banner-text.png",
})`
	display: block;
	height: 30px;
	grid-column: 1 / 6;
	margin-left: ${theme.gutter}px;

	${theme.breakpoint("xs", "lg")`
		display: none;
	`}
`;

export const Outer = styled.div`
	padding-top: ${barHeight}px;
`;

export const Grid = styled(DefaultGrid)`
	row-gap: 0;
	width: 100%;

	${theme.breakpoint("lg")`
	align-items: center;
	`}

	${theme.breakpoint("xs", "lg")`
		padding: 0 ${theme.gutter}px;
		box-sizing: border-box;
	`}
`;

export const Wrapper = styled.nav`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 10;
	${theme.shadow};

	box-sizing: border-box;

	${theme.breakpoint("lg")`
		padding-top: 0;
	`}
`;

export const Bar = styled.div`
	background-color: white;
	width: 100%;
	height: ${barHeight}px;

	${theme.breakpoint("lg")`
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
	`}
`;

export const Logo = styled.a.attrs({ href: "/" })`
	background-size: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url(/assets/images/crown-logo.png);
	height: ${barHeight}px;
	width: ${barHeight * 1.21}px;
	z-index: 1000;
	margin-left: auto;
	${theme.breakpoint("xs", "lg")`
		position: fixed;
		top: 0; right: 0;
	`};
`;

export const LinkWrapper = styled.div`
	${theme.breakpoint("xs", "lg")`
	background-color: white;
	${({ active }) =>
		!active &&
		`
		.nav-link {
			display: none
		}`};
	`}
	position: relative;
	z-index: 11;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Control = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 70px;
	height: ${barHeight}px;
	background-size: 19px 19px;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url(/assets/icons/nav-${({ active }) =>
		active ? `close` : `open`}.svg);

	${theme.breakpoint("lg")`
		display: none;
	`}
`;
