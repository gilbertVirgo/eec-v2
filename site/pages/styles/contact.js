import styled from "styled-components";
import theme from "../../theme";

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