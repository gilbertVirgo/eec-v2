import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.div`
	grid-column: span 6;

	${theme.breakpoint("lg")`grid-column: span 4`}
`;
export const Image = styled.div`
    height: 50vw;
    ${theme.breakpoint("sm")`height: 230px;`}

    background-image: url("${({ src }) => src}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: ${theme.gutter}px;
`;
export const Body = styled.div`
	padding: ${theme.gutter}px ${theme.gutter}px 0;
	box-sizing: border-box;
`;
