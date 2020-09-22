import {
	Background,
	BadgeWrapper,
	Caption,
	Figure,
	FigureGrid,
	Wrapper,
} from "./styles";
import { Container, Grid } from "..";

import Badge from "../Badge";
import React from "react";

export function Stripe({
	children,
	color,
	bgProps,
	gridProps,
	expands,
	...props
}) {
	return (
		<Wrapper {...props}>
			<Background {...bgProps} expands={expands} color={color} />
			<Container>
				<Grid {...gridProps}>{children}</Grid>
			</Container>
		</Wrapper>
	);
}

Stripe.Badge = ({ children, ...props }) => (
	<BadgeWrapper>
		<Badge {...props}>{children}</Badge>
	</BadgeWrapper>
);

Stripe.Body = ({ children, ...props }) => (
	<Caption {...props}>{children}</Caption>
);

Stripe.FigureGrid = ({ children, ...props }) => (
	<FigureGrid {...props}>{children}</FigureGrid>
);

Stripe.Figure = ({ children, ...props }) => (
	<Figure {...props}>{children}</Figure>
);
