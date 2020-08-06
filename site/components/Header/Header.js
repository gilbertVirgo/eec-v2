import { Container, Grid } from "..";
import { Logo, Wrapper } from "./styles";

import { Link } from "./Link";
import React from "react";
import Headroom from 'react-headroom';

export const Header = ({ children }) => {
	return (
		<Headroom>
			<Wrapper>
				<Container>
					<Grid>
						<Link to="/events">What's on</Link>
						<Link to="/leaders">Leaders</Link>
						<Link to="/teams">Teams</Link>
						<Link to="/about">About</Link>
						<Link to="/preaches">Preaches</Link>
						<Link to="/sermons">Sermons</Link>
						<Link to="/contact">Contact</Link>
						<Logo />
					</Grid>
				</Container>
			</Wrapper>
		</Headroom>
	);
};
