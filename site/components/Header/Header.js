import { Container, Grid } from "..";
import { Logo, Wrapper } from "./styles";

import { Link } from "./Link";
import React from "react";

export const Header = ({ children }) => {
	return (
		<Wrapper>
			<Container>
				<Grid>
					<Logo />
					<Link to="/about">About</Link>
					<Link to="/events">What's on</Link>
					<Link to="/sermons">Preaches</Link>
					<Link to="/contact">Contact</Link>
				</Grid>
			</Container>
		</Wrapper>
	);
};
