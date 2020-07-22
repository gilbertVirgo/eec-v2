import { Container, Grid } from "..";
import { Logo, Wrapper } from "./styles";

import { Link } from "./Link";
import React from "react";

export const Header = ({ children }) => {
	return (
		<Wrapper>
			<Container>
				<Grid>
					<Link to="/events">What's on</Link>
					<Link to="/leaders">Leaders</Link>
					<Link to="/teams">Teams</Link>
					<Link to="/about">About</Link>
					<Link to="/sermons">Sermons</Link>
					<Link to="/contact">Contact</Link>
					<Logo />
				</Grid>
			</Container>
		</Wrapper>
	);
};
