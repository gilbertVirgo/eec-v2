import { Caption } from "..";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
	text-align: right;
	height: 30px;
	line-height: 30px;
	color: black;
`;

export const Link = ({ to, children }) => {
	return (
		<Wrapper href={to}>
			<Caption style={{ marginBottom: "0" }}>{children}</Caption>
		</Wrapper>
	);
};
