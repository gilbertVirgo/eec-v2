import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.div`
	height: 450px;
	overflow: hidden;
	padding-top: 20vw;
	color: white;
	${theme.breakpoint("md")`padding-top: 10vw`}
`;

export const Icon = styled.img`
	display: inline-block;
	margin-right: 15px;
	height: 20px;
`;

export const Row = styled.div`
	grid-column: 1 / -1;
	display: flex;
	flex-direction: row;
	justify-content: center;

	p {
		font-size: 20px;
	}
`;
