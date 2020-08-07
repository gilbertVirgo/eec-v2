import {
	BadgeWrapper,
	Columns,
	Gradient,
	ImageWrapper,
} from "./styles/leaders";
import {
	Caption,
	Container,
	Grid,
	Group,
	Heading,
	Paragraph,
	Subheading,
} from "../components";

import Badge from "../components/Badge";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Layout from "../components/Layout";
import List from "../components/List";
import Player from "../components/Player";
import Stripe from "../components/Stripe";
import { sermons } from "./data/preaches";
import styled from "styled-components";
import theme from "../theme";

export default function Preaches() {
	return (
		<Layout.Default title="Preaches">
			<Banner src="/assets/images/man_in_black.png">
				<Banner.Badge
					borderColor={theme.color.orange}
					starColor="white"
					textColor="white"
				>
					Preaches
				</Banner.Badge>
				<Banner.Body>
					<Heading>A Blind Man Sees</Heading>
					<Subheading>EVANS BISSESSAR</Subheading>
					<Player />
				</Banner.Body>
			</Banner>
			<Container>
				<Heading style={{ marginBottom: "48px" }}>
					Previous Weeks
				</Heading>
				<Grid>
					<Filter>one 1</Filter>
					{sermons.map(({ title, description, image }) => (
						<Card>
							<Card.Image src={image} />
							<Card.Body>
								<Caption>{title}</Caption>
								<Paragraph>{description}</Paragraph>
							</Card.Body>
						</Card>
					))}
				</Grid>
			</Container>
		</Layout.Default>
	);
}
