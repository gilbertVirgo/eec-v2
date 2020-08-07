import { BadgeWrapper, Caption, Figure, Wrapper } from "./styles";
import { Container, Grid } from "..";

import Badge from "../Badge";
import React from "react";
import theme from "../../theme";

export function Stripe({ children, color, gridProps, ...props }) {
	return (
		<Wrapper color={color} {...props}>
			<Container>
				<Grid style={{ rowGap: `${theme.gutter}px` }} {...gridProps}>
					{children}
				</Grid>
			</Container>
		</Wrapper>
	);
}

Stripe.Badge = ({ children, ...props }) => (
	<BadgeWrapper>
		<Badge {...props}>{children}</Badge>
	</BadgeWrapper>
);

Stripe.Caption = ({ children, ...props }) => (
	<Caption {...props}>{children}</Caption>
);

Stripe.Figure = ({ children, ...props }) => (
	<Figure {...props}>{children}</Figure>
);
