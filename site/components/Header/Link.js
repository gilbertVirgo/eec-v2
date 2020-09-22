import { Caption } from "..";
import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const Wrapper = styled.a`
	grid-column: 1 / -1;

	height: 30px;
	line-height: 30px;
	color: black;

	${theme.breakpoint("lg")`
		grid-column: auto;
	`}
`;

export const Link = ({ to, children }) => {
	return (
		<Wrapper href={to}>
			<Caption style={{ marginBottom: "0" }}>{children}</Caption>
		</Wrapper>
	);
};
