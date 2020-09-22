import { Bar, Control, LinkWrapper, Logo, Outer, Wrapper } from "./styles";

import { Grid } from "..";
import { Link } from "./Link";
import React from "react";

export const Header = ({ children }) => {
	const [active, setActive] = React.useState(false);

	const handleToggleActive = () => setActive(!active);

	return (
		<Outer>
			<Wrapper active={active}>
				<Bar />
				<Control active={active} onClick={handleToggleActive} />
				<Logo />
				<LinkWrapper active={active}>
					<Grid style={{ rowGap: 0 }}>
						<Link to="/events">What's on</Link>
						<Link to="/leaders">Leaders</Link>
						<Link to="/teams">Teams</Link>
						<Link to="/about">About</Link>
						<Link to="/sermons">Sermons</Link>
						<Link to="/contact">Contact</Link>
					</Grid>
				</LinkWrapper>
			</Wrapper>
		</Outer>
	);
};
