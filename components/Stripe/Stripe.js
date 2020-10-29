import {
	Background,
	BadgeWrapper,
	Caption,
	Container,
	Figure,
	FigureGrid,
	Grid,
	Wrapper,
} from "./styles";

import Badge from "../Badge";
import React from "react";

export function Stripe({
	children,
	color,
	bgProps,
	containerProps,
	gridProps,
	expands,
	expandsAll,
	sticky,
	...props
}) {
	return (
		<Wrapper sticky={sticky} {...props}>
			<Background
				{...bgProps}
				expands={expands}
				expandsAll={expandsAll}
				color={color}
			/>
			<Container sticky={sticky} {...containerProps}>
				<Grid sticky={sticky} {...gridProps}>
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

Stripe.Body = ({ children, ...props }) => (
	<Caption {...props}>{children}</Caption>
);

Stripe.FigureGrid = ({ children, ...props }) => (
	<FigureGrid {...props}>{children}</FigureGrid>
);

Stripe.Figure = ({ children, ...props }) => (
	<Figure {...props}>{children}</Figure>
);
