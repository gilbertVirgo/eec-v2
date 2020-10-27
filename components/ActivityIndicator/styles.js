import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	${({ fullScreen }) =>
		fullScreen
			? `
		left: 0; top: 0;
		width: 100vw;
		height: 100vh;
		position: fixed;
		z-index: 99999;
		background-color: white;
		`
			: `
		margin: ${theme.gutter * 2}px 0;
		width: 100%;
		grid-column: 1 / -1;
		height: 100px;
	`}
`;
