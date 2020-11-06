import {
	Caption,
	Container,
	Grid,
	Group,
	Heading,
	Paragraph,
} from "../components";
import { fetchEvents, fetchRegularEvents } from "../scripts/events";

import { ActivityIndicator } from "../components/ActivityIndicator/ActivityIndicator";
import { Banner } from "../components/Banner";
import Card from "../components/Card";
import Layout from "../components/Layout";
import List from "../components/List";
import Stripe from "../components/Stripe";
import initLax from "../scripts/initLax";
import moment from "moment";
import { regular } from "../data/events";
import theme from "../theme";

export default function Events() {
	const [events, setEvents] = React.useState();
	const [regularEvents, setRegularEvents] = React.useState();

	React.useEffect(() => {
		(async function () {
			const events = await fetchEvents();
			setEvents(events);

			const regularEvents = await fetchRegularEvents();
			setRegularEvents(regularEvents);

			initLax();
		})();
	}, []);

	return (
		<Layout.Default title="What's On">
			<Banner src="/assets/images/whats-on.jpg">
				<Banner.Badge
					borderColor={theme.color.orange}
					starColor="white"
					textColor="white"
				>
					What's On
				</Banner.Badge>
				<Banner.Body>
					<Heading>We’ve always got something going on...</Heading>
					<Paragraph>
						From prayer meetings to massive multicultural feasts, we
						love to put on events of all sorts.
						<br />
						Everyone’s welcome!
					</Paragraph>
				</Banner.Body>
			</Banner>
			{events ? (
				<React.Fragment>
					<Stripe
						standalone
						color={theme.color.blue}
						style={{ color: "white" }}
					>
						<Stripe.Badge
							borderColor="white"
							textColor="white"
							starColor={theme.color.blue}
						>
							Coming up
						</Stripe.Badge>
						<Stripe.Body>
							<Group>
								<Heading>{events[0].title}</Heading>
								<List style={{ listStyleType: "none" }}>
									<List.Item icon="/assets/icons/pin.svg">
										<Caption>{events[0].location}</Caption>
									</List.Item>
									<List.Item icon="/assets/icons/calendar.svg">
										<Caption>
											{moment(events[0].date).format(
												"MMMM Do YYYY"
											)}
										</Caption>
									</List.Item>
								</List>
							</Group>

							<Paragraph>{events[0].description}</Paragraph>
						</Stripe.Body>
						<Stripe.Figure>
							<img src={events[0].image.url} />
						</Stripe.Figure>
					</Stripe>
					<Container>
						<Heading style={{ marginBottom: "30px" }}>
							Coming Soon
						</Heading>

						<Grid>
							{events
								.slice(1)
								.map(({ title, description, image }, index) => (
									<Card key={`events-card-${index}`}>
										<Card.Image src={image.url} />
										<Card.Body>
											<Caption>{title}</Caption>
											<Paragraph>{description}</Paragraph>
										</Card.Body>
									</Card>
								))}
						</Grid>
					</Container>
				</React.Fragment>
			) : (
				<ActivityIndicator>Loading events...</ActivityIndicator>
			)}
			<Container>
				<Heading style={{ marginBottom: "30px" }}>
					Regular Events
				</Heading>
				<Grid>
					{regularEvents ? (
						regularEvents.map(
							({ title, description, image }, index) => (
								<Card key={`regevents-card-${index}`}>
									<Card.Image src={image.url} />
									<Card.Body>
										<Caption>{title}</Caption>
										<Paragraph>{description}</Paragraph>
									</Card.Body>
								</Card>
							)
						)
					) : (
						<ActivityIndicator>
							Loading regular events...
						</ActivityIndicator>
					)}
				</Grid>
			</Container>
		</Layout.Default>
	);
}
