import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.div`
	margin: ${theme.gutter * 2}px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 100px;
	grid-column: 1 / -1;
`;
