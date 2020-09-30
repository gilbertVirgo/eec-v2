import { BadgeWrapper, Body, Container, Overlay, Wrapper } from "./styles";

import { Grid } from "..";
import React from "react";

export const Banner = ({ children, src, gridProps, ...props }) => {
	return (
		<Wrapper src={src} {...props}>
			<Overlay />
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
