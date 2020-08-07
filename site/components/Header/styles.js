import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.nav`
	background-color: white;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	${theme.shadow};
`;

export const Logo = styled.img.attrs({ src: "/assets/images/crown-logo.png" })`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
`;
