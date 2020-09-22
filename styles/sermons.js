import { Section as DefaultSection } from "../components";
import styled from "styled-components";
import theme from "../theme";

export const Sidebar = styled.div`
	grid-column: 1 / -1;
	overflow-y: hidden;
	max-height: ${({ active }) => (active ? `none` : `35px`)};

	${theme.breakpoint("md")`
		overflow: visible;
        grid-column: 1 / 4;
		grid-row: 1 / 10
		max-height: none;
    `}
`;

export const Section = styled(DefaultSection)`
	grid-column: 1 / -1;

	${theme.breakpoint("md")`
		grid-column: 5 / -1;
	`}
`;

export const Search = {
	Wrapper: styled.div`
		padding-bottom: 2px;
		border-bottom: 2px solid black;
		margin-bottom: ${theme.gutter}px;
		display: flex;
	`,
	Icon: styled.div`
		width: 21px;
		height: 22px;
		background-image: url("/assets/icons/search.svg");
		background-size: cover;
		background-repeat: none;
	`,
	Input: styled.input.attrs({ type: "text" })`
		border: none;
		background-color: none;
		flex: 1;
		font-family: ${theme.font.family.body};
		outline: none;
	`,
};
