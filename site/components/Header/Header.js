import { Container } from "..";
import { Logo, Wrapper, GridHeader, OpenMenu, CloseMenu } from "./styles";

import Headroom from "react-headroom";
import { Link } from "./Link";
import React, { useState } from 'react';

export const Header = ({ children }) => {

	const [open, setOpen] = useState(false)

	return (
		<Headroom>
			<Wrapper open={open}>
				<Container>
					<CloseMenu open={open} onClick={() => setOpen(!open)} style={{ 'marginTop': '30px', 'marginBottom': '30px' }} />
					<OpenMenu open={open} onClick={() => setOpen(!open)} style={{ 'marginTop': '30px', 'marginBottom': '30px' }}/>
					<GridHeader open={open}>
						<Link to="/events">What's on</Link>
						<Link to="/leaders">Leaders</Link>
						<Link to="/teams">Teams</Link>
						<Link to="/about">About</Link>
						<Link to="/preaches">Preaches</Link>
						{/* <Link to="/sermons">Sermons</Link> */}
						<Link to="/contact">Contact</Link>
					</GridHeader>
					<Logo />
				</Container>
			</Wrapper>
		</Headroom>
	);
};
