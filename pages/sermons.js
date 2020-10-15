import {
	Caption,
	Container,
	Grid,
	Group,
	Heading,
	Paragraph,
	Section,
	Subheading,
} from "../components";
import { RangeWrapper, Search, Sidebar } from "../styles/sermons";
import {
	fetchPodcastEpisodes,
	getXMLAttribute,
	getXMLProperty,
} from "../scripts/sermons";
import { filterByDate, filterByText } from "../scripts/filter";

import { ActivityIndicator } from "../components/ActivityIndicator/ActivityIndicator";
import { Banner } from "../components/Banner";
import H5AudioPlayer from "react-h5-audio-player";
import InputRange from "react-input-range";
import Layout from "../components/Layout";
import List from "../components/List";
import Player from "../components/Player";
import Stripe from "../components/Stripe";
import moment from "moment";
import styled from "styled-components";
import theme from "../theme";

//
//
// Get the filter thing working for mobile
//
//

const Card = styled.div`
	grid-column: 1 / -1;

	${theme.breakpoint("md")`
		grid-column: ${({ column }) => `${column} / ${column + 4}`}};
	`}
`;

export default function Sermons() {
	const [episodes, setEpisodes] = React.useState();
	const [filteredEpisodes, setFilteredEpisodes] = React.useState();

	const [searchText, setSearchText] = React.useState("");
	const [dateRange, setDateRange] = React.useState({
		min: 2012,
		max: new Date().getFullYear(),
	});
	const [latestEpisode, setLatestEpisode] = React.useState();

	React.useEffect(() => {
		(async function () {
			const episodes = await fetchPodcastEpisodes();

			setLatestEpisode(episodes[0]);
			setEpisodes(episodes.slice(1));
		})();
	}, []);

	React.useEffect(() => {
		setFilteredEpisodes(episodes);
	}, [episodes]);

	React.useEffect(() => {
		if (episodes) {
			const filteredByDate = filterByDate(episodes, dateRange);
			const filteredByText = filterByText(filteredByDate, searchText);

			if (
				JSON.stringify(filteredByText) !==
				JSON.stringify(filteredEpisodes)
			)
				setFilteredEpisodes(filteredByText);
		}
	}, [dateRange, searchText, episodes]);

	return (
		<Layout.Default title="Sermons">
			<Banner src="/assets/images/sermons-banner.jpg">
				<Banner.Badge
					borderColor={theme.color.blue}
					starColor="white"
					textColor="white"
				>
					Sermons
				</Banner.Badge>
			</Banner>
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
					Last Sunday
				</Stripe.Badge>
				{episodes ? (
					<React.Fragment>
						<Stripe.Body>
							<Group>
								<Heading style={{ marginBottom: 0 }}>
									{latestEpisode.title}
								</Heading>
								<Caption>{latestEpisode.author}</Caption>
							</Group>
							<Player inverted src={latestEpisode.url} />
						</Stripe.Body>
						<Stripe.Figure>
							<img src={latestEpisode.image} />
						</Stripe.Figure>
					</React.Fragment>
				) : (
					<ActivityIndicator>Loading episode...</ActivityIndicator>
				)}
			</Stripe>
			<Container style={{ minHeight: "800px" }}>
				<Heading style={{ marginBottom: theme.gutter * 3 + "px" }}>
					Previous Weeks
				</Heading>
				<Grid>
					<Sidebar>
						<Section>
							<Caption>
								Filters{" "}
								<img
									src="/assets/icons/chevron-down.svg"
									width={12}
								/>
							</Caption>
						</Section>
						<Section style={{ marginBottom: "30px" }}>
							<Search.Wrapper>
								<Search.Icon />
								<Search.Input
									value={searchText}
									onChange={({ target }) =>
										setSearchText(target.value)
									}
									placeholder="Search by speaker, title or topic"
								/>
							</Search.Wrapper>
						</Section>
						<Section
							style={{
								fontFamily: theme.font.family.body,
								marginBottom: theme.gutter * 3 + "px",
							}}
						>
							<InputRange
								draggableTrack
								maxValue={new Date().getFullYear()}
								minValue={2012}
								onChange={(value) => setDateRange(value)}
								onChangeComplete={(value) => console.log(value)}
								value={dateRange}
							/>
						</Section>
						<Section>
							<Caption>Sermon Series</Caption>
						</Section>
						<Section>
							{[
								"Jacob Series",
								"Party Series",
								"I Am - Claims of Jesus",
								"Ephesians",
								"Superheroes",
								"Acts: Partnering with the Holy Spirit",
								"The Lords Prayer",
								"Jeremiah",
								"Esther",
								"Spring 2016",
								"The Great Commission",
								"Guests",
								"1 Corinthians Series",
								"East End Heroes",
								"EEC Under Construction",
								"Foundation Series",
								"Gospel Series",
								"Joseph Series",
								"Matthew Series",
								"Money Series",
							].map((name, index) => (
								<Paragraph key={`series-title-${index}`}>
									{name}
								</Paragraph>
							))}
						</Section>
					</Sidebar>
					{filteredEpisodes ? (
						filteredEpisodes.map(
							({ title, author, pubDate, url }, index) => {
								return (
									<Card
										key={`episodes-item-${index}`}
										column={5 + (index % 2) * 4}
										style={{
											fontFamily: theme.font.family.body,
										}}
									>
										<Subheading>{title}</Subheading>
										<Paragraph>
											{author} |{" "}
											{moment(pubDate).format(
												"D MMMM YYYY"
											)}{" "}
										</Paragraph>
										<Player src={url} />
									</Card>
								);
							}
						)
					) : (
						<Section>
							<ActivityIndicator>
								Loading sermons...
							</ActivityIndicator>
						</Section>
					)}
				</Grid>
			</Container>
		</Layout.Default>
	);
}
