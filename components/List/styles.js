import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.ul`
	padding-left: ${theme.gutter}px;

	${({ icon }) =>
		icon &&
		`
		list-style-type: none; 

		li {
			background-image: url("${icon}")
		}
	`}
`;

export const Item = styled.li`
	font-weight: bold;
	padding-left: ${theme.gutter * 2}px;
	background-repeat: no-repeat;
	background-position: left center;
	background-size: auto 100%;

	${({ icon }) => `background-image: url("${icon}");`}

	&,
	p {
		margin: 0 0 8px;
	}
`;
