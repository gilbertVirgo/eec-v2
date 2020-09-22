import { Banner, Carousel } from "../components/Banner";
import { Caption, Group, Heading, Paragraph } from "../components";
import {
	fetchPodcastEpisodes,
	getXMLAttribute,
	getXMLProperty,
} from "./scripts/sermons";

import ActivityIndicator from "../components/ActivityIndicator";
import Layout from "../components/Layout";
import List from "../components/List";
import Pin from "../public/assets/icons/pin.svg";
import Player from "../components/Player";
import Stripe from "../components/Stripe";
import { fetchEvents } from "./scripts/events";
import moment from "moment";
import theme from "../theme";

export default function Home() {
	const [latestEpisode, setLatestEpisode] = React.useState();
	const [latestEvent, setLatestEvent] = React.useState();

	React.useEffect(() => {
		(async function () {
			const episodes = await fetchPodcastEpisodes();
			setLatestEpisode(episodes[0]);

			const events = await fetchEvents();
			setLatestEvent(events[0]);
		})();
	}, []);

	return (
		<Layout.Default title="Home" style={{ color: "white" }}>
			<Carousel
				src="/assets/images/banner.png"
				gridProps={{ style: { rowGap: theme.gutter + "px" } }}
				frames={[
					// "/assets/images/church.jpg",
					"/assets/images/sermons.jpg",
					"/assets/images/contact.png",
					"/assets/images/teams.png",
				]}
			>
				<Banner.Badge
					borderColor={theme.color.mustard}
					starColor="white"
					textColor="white"
				>
					We don't care
				</Banner.Badge>
				<Banner.Body center>
					{/* Needs to be stuttered */}
					<List
						icon="/assets/icons/exit.svg"
						style={{
							marginBottom: "75px",
						}}
					>
						<List.Item>
							<Paragraph>what you wear</Paragraph>
						</List.Item>
						<List.Item>
							<Paragraph>how old you are</Paragraph>
						</List.Item>
						<List.Item>
							<Paragraph>where you're from</Paragraph>
						</List.Item>
						<List.Item>
							<Paragraph>about your criminal record</Paragraph>
						</List.Item>
						<List.Item>
							<Paragraph>about your bank balance</Paragraph>
						</List.Item>
						<List.Item>
							<Paragraph>who or what you vote for</Paragraph>
						</List.Item>
					</List>
					<img
						src="/assets/icons/tagline.svg"
						width="100%"
						style={{
							display: "block",
							marginBottom: `${theme.gutter}px`,
						}}
					/>
					<Paragraph
						style={{
							textAlign: "center",
							fontWeight: "bold",
						}}
					>
						East End Church is a place where
						<br />
						Jesus meets normal people
					</Paragraph>
				</Banner.Body>
			</Carousel>

			<Stripe color={theme.color.orange} style={{ color: "white" }}>
				<Stripe.Badge
					borderColor="white"
					textColor="white"
					starColor={theme.color.orange}
				>
					Coming up
				</Stripe.Badge>
				{latestEvent ? (
					<React.Fragment>
						<Stripe.Body>
							<Group>
								<Heading>{latestEvent.title}</Heading>
								<List style={{ listStyleType: "none" }}>
									<List.Item icon="/assets/icons/pin.svg">
										<Caption>
											{latestEvent.location}
										</Caption>
									</List.Item>
									<List.Item icon="/assets/icons/calendar.svg">
										<Caption>
											{moment(latestEvent.date).format(
												"MMMM Do YYYY"
											)}
										</Caption>
									</List.Item>
								</List>
							</Group>

							<Group>
								<Paragraph>{latestEvent.description}</Paragraph>
							</Group>

							<Caption>
								<a href="/events">
									See what's on
									<img
										style={{ marginLeft: "4px" }}
										src="/assets/icons/chevron-right.svg"
									/>
								</a>
							</Caption>
						</Stripe.Body>
						<Stripe.Figure>
							<img src={latestEvent.image.url} />
						</Stripe.Figure>
					</React.Fragment>
				) : (
					<ActivityIndicator inverted>
						Loading events...
					</ActivityIndicator>
				)}
			</Stripe>

			<Stripe color={theme.color.blue} style={{ color: "white" }}>
				<Stripe.Badge
					borderColor="white"
					textColor="white"
					starColor={theme.color.blue}
				>
					Last Sunday
				</Stripe.Badge>
				{latestEpisode ? (
					<React.Fragment>
						<Stripe.Body>
							<Group>
								<Heading style={{ marginBottom: 0 }}>
									{getXMLProperty(latestEpisode, "title")}
								</Heading>
								<Caption>
									{getXMLProperty(
										latestEpisode,
										"itunes:author"
									)}
								</Caption>
							</Group>
							<Group>
								<Player
									inverted
									src={getXMLAttribute(
										latestEpisode,
										"enclosure",
										"url"
									)}
								/>
							</Group>
							<Caption>
								<a href="/sermons">
									See other sermons
									<img
										style={{ marginLeft: "4px" }}
										src="/assets/icons/chevron-right.svg"
									/>
								</a>
							</Caption>
						</Stripe.Body>
						<Stripe.Figure>
							<img
								src={getXMLAttribute(
									latestEpisode,
									"itunes:image",
									"href"
								)}
							/>
						</Stripe.Figure>
					</React.Fragment>
				) : (
					<ActivityIndicator inverted>
						Loading episode information...
					</ActivityIndicator>
				)}
			</Stripe>
			<Stripe
				color={theme.color.purple}
				style={{ marginBottom: "100px" }}
			>
				<Stripe.Badge
					borderColor="white"
					textColor="white"
					starColor={theme.color.purple}
				>
					Find Us
				</Stripe.Badge>
				<div style={{ textAlign: "center", gridColumn: "1 / 2" }}>
					<Pin fill="white" />
				</div>
				<div style={{ gridColumn: "2 / -1" }}>
					<Heading>Raine's Foundation School</Heading>
					<Caption>London, E2 9LY</Caption>
				</div>
				<div
					style={{
						gridColumn: "1 / -1",
						boxShadow: "0 3px 5px #00000030",
					}}
				>
					<iframe
						width="100%"
						height="450px"
						id="mapcanvas"
						src="https://maps.google.com/maps?q=E2%209LY&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
						frameBorder="0"
						scrolling="no"
						marginHeight="0"
						marginWidth="0"
					>
						<div className="zxos8_gm">
							<a href="https://www.twinstiarasandtantrums.com/2020/06/buying-a-mattress-is-a-nightmare/">
								according to this review
							</a>
						</div>
						<div style={{ overflow: "hidden" }}>
							<div
								id="gmap_canvas"
								style={{ height: "100%", width: "100%" }}
							></div>
						</div>
						<div>
							<small>
								Powered by{" "}
								<a href="https://www.embedgooglemap.co.uk">
									Embed Google Map
								</a>
							</small>
						</div>
					</iframe>
				</div>
			</Stripe>
		</Layout.Default>
	);
}
