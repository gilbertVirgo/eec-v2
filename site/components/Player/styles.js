import { Paragraph } from "..";
import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	column-gap: ${theme.gutter}px;
	row-gap: ${theme.gutter}px;
	color: white;
`;

export const CurrentTime = styled(Paragraph)`
	grid-column: 1 / 2;
	text-align: right;
`;

export const StatusBar = styled.div`
	grid-column: 2 / 7;
	height: 3px;
	border-radius: 3px;
	background-color: white;
	margin-top: 8px;
`;

export const Duration = styled(Paragraph)`
	grid-column: 7 / 8;
`;

export const Back = styled.img.attrs({ src: "/assets/icons/back-15.svg" })`
	grid-column: 3 / 4;
	text-align: center;
	width: 25px;
	height: 25px;
`;

export const Play = styled.img.attrs({ src: "/assets/icons/play.svg" })`
	grid-column: 4 / 5;
	text-align: center;
	width: 25px;
	height: 25px;
`;

export const Skip = styled.img.attrs({ src: "/assets/icons/skip-15.svg" })`
	grid-column: 5 / 6;
	text-align: center;
	width: 25px;
	height: 25px;
`;
