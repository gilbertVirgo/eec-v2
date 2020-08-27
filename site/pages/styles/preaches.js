import { Container } from "../../components";
import styled from "styled-components";
import Cards from "../../components/Card";
import theme from "../../theme";

export const Card = styled(Cards)`
    grid-column: span 6;
`;

export const Empty = styled.div`
    grid-column: span 1;
`;

export const Main = styled.div`
    grid-column: span 8;
`;

export const Side = styled.div`
    ${theme.breakpoint("sm")`
        grid-column: span 6;
    `}
    ${theme.breakpoint("lg")`
        grid-column: span 3;
    `}
    ${theme.breakpoint("md")`
        grid-column: span 3;
    `}
`;