import { Caption, Container, Grid, Heading, Paragraph } from "../components";

import Badge from "../components/Badge";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { regular } from "./data/events";
import theme from "../theme";

export default function Teams() {
	return (
		<Layout.Default title="What's On">
			<Banner src="/assets/images/team.png">
				<Badge
					borderColor={theme.color.orange}
					starColor="white"
					textColor="white"
				>
					Teams
				</Badge>
			</Banner>
			<Container>
				<Grid>
					{regular.map(({ title, description, image }) => (
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
