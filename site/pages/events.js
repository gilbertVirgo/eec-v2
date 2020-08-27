import { Caption, Container, Grid, Heading, Paragraph } from "../components";

import Banner from "../components/Banner";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { regular } from "./data/events";
import theme from "../theme";

export default function Events() {
	return (
		<Layout.Default title="What's On">
			<Banner src="/assets/images/banner.png">
				<Banner.Badge
					borderColor={theme.color.orange}
					starColor="white"
					textColor="white"
				>
					What's On
				</Banner.Badge>
				<Banner.Body>
					<Heading>Baptism Service</Heading>
					<Paragraph>Something's going on this Sunday!</Paragraph>
				</Banner.Body>
			</Banner>
			<Container>
				<Heading style={{ marginBottom: "30px" }}>
					Regular Events
				</Heading>
				<Grid>
					{regular.map(({ title, description, image }, index) => (
						<Card key={index}>
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
