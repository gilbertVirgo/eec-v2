import {
	BannerText,
	Bar,
	Control,
	Grid,
	LinkWrapper,
	Logo,
	Outer,
	Wrapper,
} from "./styles";

import { Link } from "./Link";
import React from "react";

export const Header = () => {
	const [active, setActive] = React.useState(false);

	const handleToggleActive = () => setActive(!active);

	return (
		<Outer>
			<Wrapper active={active}>
				<Bar />
				<Control active={active} onClick={handleToggleActive} />

				<LinkWrapper active={active}>
					<Grid style={{ rowGap: 0, alignItems: "center" }}>
						<BannerText />
						<Link to="/events">What's on</Link>
						<Link to="/leaders">Leaders</Link>
						<Link to="/teams">Teams</Link>
						<Link to="/about">About</Link>
						<Link to="/sermons">Sermons</Link>
						<Link to="/contact">Contact</Link>
						<Logo />
					</Grid>
				</LinkWrapper>
			</Wrapper>
		</Outer>
	);
};
