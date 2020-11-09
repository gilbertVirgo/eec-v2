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
	splitIntoPages,
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
import initLax from "../scripts/initLax";
import moment from "moment";
import styled from "styled-components";
import theme from "../theme";

const Card = styled.div`
	grid-column: 1 / -1;

	${theme.breakpoint("md")`
		grid-column: ${({ column }) => `${column} / ${column + 4}`}};
	`}
`;

const PageNumberWrapper = styled.div`
	grid-column: 1 / -1;

	${theme.breakpoint("lg")`
		grid-column: 5 / -1;
	`}
`;

const PageIncrement = styled.a.attrs({ href: "javascript:void(0)" })`
	${({ disabled }) =>
		disabled &&
		`
		pointer-events: none;
		opacity: 0.35;
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
	const [sidebarOpen, setSidebarOpen] = React.useState(false);
	const [pageNumber, setPageNumber] = React.useState(0);

	React.useEffect(() => {
		(async function () {
			const episodes = await fetchPodcastEpisodes();

			setLatestEpisode(episodes[0]);
			setEpisodes(episodes.slice(1));

			initLax();
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
			) {
				setPageNumber(0);
				setFilteredEpisodes(filteredByText);
			}
		}
	}, [dateRange, searchText, episodes]);

	const seriesTitles = episodes
		? [...new Set(episodes.map(({ seriesTitle }) => seriesTitle))]
		: [];

	const pages = splitIntoPages(filteredEpisodes || []);
	const episodesOnPage = pages[pageNumber] || [];

	return (
		<Layout.Default title="Sermons">
			<Banner src="/assets/images/sermons.jpg">
				<Banner.Badge
					borderColor={theme.color.purple}
					starColor="white"
					textColor="white"
				>
					Sermons
				</Banner.Badge>
			</Banner>
			<Stripe
				standalone
				color={theme.color.purple}
				style={{ color: "white" }}
			>
				<Stripe.Badge
					borderColor="white"
					textColor="white"
					starColor={theme.color.purple}
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
					<Sidebar open={sidebarOpen}>
						<Section>
							<Caption>
								Filters{" "}
								<Sidebar.Control
									onClick={() => setSidebarOpen(!sidebarOpen)}
									open={sidebarOpen}
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
								padding: "0 15px",
								boxSizing: "border-box",
							}}
						>
							<InputRange
								draggableTrack
								maxValue={new Date().getFullYear()}
								minValue={2012}
								onChange={(value) => setDateRange(value)}
								value={dateRange}
							/>
						</Section>
						<Section>
							<Caption>Sermon Series</Caption>
						</Section>
						<Section>
							{seriesTitles.map((name, index) => (
								<Paragraph
									style={{ cursor: "pointer" }}
									onClick={() => setSearchText(name)}
									key={`series-title-${index}`}
								>
									{name}
								</Paragraph>
							))}
						</Section>
					</Sidebar>
					{episodesOnPage.length ? (
						<React.Fragment>
							{episodesOnPage.map(
								({ title, author, pubDate, url }, index) => {
									return (
										<Card
											key={`episodes-item-${index}`}
											column={5 + (index % 2) * 4}
											style={{
												fontFamily:
													theme.font.family.body,
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
							)}
							<PageNumberWrapper>
								<Paragraph>
									Page {pageNumber + 1} of {pages.length}
								</Paragraph>
								<Caption>
									<PageIncrement
										onClick={() =>
											setPageNumber((n) => n - 1)
										}
										disabled={pageNumber === 0}
									>
										Previous page
									</PageIncrement>{" "}
									/{" "}
									<PageIncrement
										onClick={() =>
											setPageNumber((n) => n + 1)
										}
										disabled={
											pageNumber === pages.length - 1
										}
									>
										Next page
									</PageIncrement>
								</Caption>
							</PageNumberWrapper>
						</React.Fragment>
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
