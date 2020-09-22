import { Container, Grid } from "..";

import styled from "styled-components";
import theme from "../../theme";

const barHeight = 100;

export const Outer = styled.div`
	padding-top: ${barHeight}px;
`;

export const Wrapper = styled.nav`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 10;
	${theme.shadow};

	/* padding-top: ${barHeight}px; */
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
	background-size: 80%;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url(/assets/images/crown-logo.png);
	position: absolute;
	top: 0;
	right: 0;
	height: ${barHeight}px;
	width: ${barHeight * 1.21}px;
	z-index: 1000;
`;

export const LinkWrapper = styled(Container)`
	${theme.breakpoint("xs", "lg")`
	background-color: white;
	${({ active }) => !active && `display: none`};
	max-width: none !important;
	margin: 0 !important;
	`}
	position: relative;
	z-index: 11;
	margin: 20px auto 0 !important;
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
