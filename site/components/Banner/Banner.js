import { Container, Grid } from "..";
import { Inner, Wrapper } from "./styles";

import React from "react";

export const Banner = ({ children, src, ...props }) => {
	return (
		<Wrapper src={src} {...props}>
			<Container>
				<Grid>
					<Inner>{children}</Inner>
				</Grid>
			</Container>
		</Wrapper>
	);
};
