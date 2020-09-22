import styled from "styled-components";
import theme from "../theme";

export const Container = styled.div.attrs({ className: "container" })`
	max-width: 480px;
	width: 100%;
	padding: ${theme.gutter}px;
	box-sizing: border-box;
	margin: 45px auto;

	${theme.breakpoint("md")`max-width: 720px; margin: 75px auto;`}
	${theme.breakpoint("lg")`max-width: 1024px;`}
    ${theme.breakpoint(
		"xl"
	)`max-width: 1280px;`}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	column-gap: ${theme.gutter}px;
	row-gap: ${theme.gutter * 3}px;

	${theme.breakpoint("md")`grid-template-columns: repeat(12, 1fr)`}
`;

export const Group = styled.div`
	margin-bottom: ${theme.gutter * 2}px;
`;

export const Title = styled.h1`
	font-family: ${theme.font.family.title};
	font-size: 48px;
	${theme.breakpoint("lg")`font-size: 60px`}
	line-height: 90%;
	margin: 0 0 5px;
`;

export const Heading = styled.h3`
	font-family: ${theme.font.family.body};
	font-weight: lighter;
	font-size: 32px;
	margin: 0 0 ${theme.gutter}px;
`;

export const Subheading = styled.h4`
	font-family: ${theme.font.family.title};
	font-size: 24px;
	margin: 0 0 5px;
`;

export const Caption = styled.h5.attrs({ className: "caption" })`
	font-family: ${theme.font.family.title};
	font-size: 16px;
	margin: 0 0 5px;
`;

export const Paragraph = styled.p`
	font-family: ${theme.font.family.body};
	font-size: 16px;
	line-height: 21px;
	margin: 0 0 5px;
`;

export const Section = styled.section`
	margin-bottom: ${theme.gutter}px;

	${({ border }) =>
		border &&
		`
		padding-bottom: ${theme.gutter}px;
	border-bottom: 1px solid ${theme.color.grey}40;
	`}
`;
