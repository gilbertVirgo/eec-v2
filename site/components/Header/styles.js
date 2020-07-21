import { Container } from "..";
import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.nav`
	background-color: white;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	${theme.shadow};

	.caption {
		text-align: right;
	}
`;

export const Logo = styled.img.attrs({ src: "/assets/images/logo.png" })`
	grid-column: 1 / 6;
	align-self: center;

	${theme.breakpoint("lg")`
        grid-column: 1 / 9;
    `}
`;
