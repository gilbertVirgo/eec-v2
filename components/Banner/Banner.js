import { BadgeWrapper, Body, Wrapper } from "./styles";
import { Container, Grid } from "..";

import React from "react";

export const Banner = ({
	children,
	src,
	gridProps,
	...props
}) => {
	return (
		<Wrapper src={src} {...props}>
			<Container>
				<Grid {...gridProps}>{children}</Grid>
			</Container>
		</Wrapper>
	);
};

Banner.Badge = ({ children, ...props }) => (
	<BadgeWrapper {...props}>{children}</BadgeWrapper>
);
Banner.Body = ({ children, ...props }) => <Body {...props}>{children}</Body>;
