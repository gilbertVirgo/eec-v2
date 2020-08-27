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

import Banner from "../components/Banner";
import Filter from "../components/Filter";
import Layout from "../components/Layout";
import Player from "../components/Player";

import { sermons } from "./data/preaches";
import { Side, Main, Empty, Card } from "./styles/preaches.js";
import theme from "../theme";


class Preaches extends React.Component {

	dataFromPodbean = [];
	constructor() {
		super();
		this.state = { podcasts: [] };
	}

	// we need to use componentDidMount, since window is not available on the server side.
	componentDidMount() { 
		const axios = require('axios').default;
		axios.get('https://feed.podbean.com/eectest/feed.xml', {
			"Content-Type": "application/xml; charset=utf-8"
		}).then(response => {
			var parseString = require('xml2js').parseString;
			parseString(response.data, (err, result) => {
				let podcasts = result.rss.channel[0].item;
				podcasts.map((item) => { 
					item.image = item["media:content"][0]["$"]["url"];
					return item;
				})
				this.setState({ podcasts: podcasts });
				this.dataFromPodbean = podcasts;
			});
		})
	}

	onFilterChange = (value) => { 

		let search = value?.search;
		let filteredData = this.dataFromPodbean.filter((obj) => {
			let title = obj?.title[0];
			if (!search) {
				return true;
			}
			else if (title) {
				title = title.toLowerCase();
				search = search.toLowerCase();
				return title.indexOf(search) >= 0;
			} else {
				return false;
			}
		});

		this.setState({
			podcasts: filteredData
		});
	}

	handleClick(index) { 
		console.log(this.state.podcasts[index]);
	}

	render() {
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
						<Side>
							<Filter onFilterChange={this.onFilterChange} podcasts={this.state.podcasts} />
						</Side>
						<Empty />
						<Main>
							<Grid>
								{this.state.podcasts.map(({ title, description, image }, index) => (
									<Card key={index} onClick={() => this.handleClick(index)}>
										<Card.Image src={image} />
										<Card.Body>
											<Caption>{title}</Caption>
											<Paragraph dangerouslySetInnerHTML={{"__html": description}}>
											</Paragraph>
										</Card.Body>
									</Card>
								))}
							</Grid>
						</Main>
					</Grid>
				</Container>
			</Layout.Default>
		);
	}
}

export default Preaches;