import styled from "styled-components";
import theme from "../../theme";
import { Grid } from "..";

import OpenIcon from "../../public/assets/icons/open-menu.svg";
import CloseIcon from "../../public/assets/icons/close-menu.svg";

export const OpenMenu = styled(OpenIcon)`
	${theme.breakpoint("xs")`
		display: ${({ open }) => open ? 'none' : 'block'};
	`}
	${theme.breakpoint("md")`
		display: none;
	`}
`;

export const CloseMenu = styled(CloseIcon)`
	${theme.breakpoint("xs")`
		display: ${({ open }) => open ? 'block' : 'none'};
	`}
	${theme.breakpoint("md")`
		display: none;
	`}
`;


export const GridHeader = styled(Grid)`
	${theme.breakpoint("xs")`
		grid-template-columns: repeat(1, 1fr);
		row-gap: 10px;
		display: ${({ open }) => open ? 'grid' : 'none'};
	`}

	${theme.breakpoint("md")`
		grid-template-columns: repeat(12, 1fr);
		display: ${({ open }) => open ? 'grid' : 'grid'};
	`}
`;

export const Wrapper = styled.nav`
	background-color: white;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	${theme.shadow};

	${theme.breakpoint("xs")`
		height: ${({ open }) => open ? '320px' : '100px'};
	`}
	${theme.breakpoint("md")`
		height: 100px;
	`}
`;

export const Logo = styled.img.attrs({ src: "/assets/images/crown-logo.png" })`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	max-height: 100px;
`;
