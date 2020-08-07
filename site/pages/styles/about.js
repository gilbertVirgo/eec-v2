import { Container } from "../../components";
import Stripe from "../../components/Stripe";
import styled from "styled-components";
import theme from "../../theme";

export const AboutStripe = styled(Stripe)`
	margin-bottom: 275px;
	${theme.breakpoint("md")`
    margin-bottom: 200px`}
`;
