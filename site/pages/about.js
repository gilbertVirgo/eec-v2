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
	Title,
} from "../components";
import { about, dont, dos } from "./data/about";

import { AboutStripe } from "./styles/about";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Stripe from "../components/Stripe";
import theme from "../theme";
import { Client } from '../prismic-configuration'

const About = (props) => {

	return (
		<Layout.Default title="About">
			<Banner src="/assets/images/banner.png">
				<Banner.Badge
					borderColor={theme.color.orange}
					starColor="white"
					textColor="white"
				>
					About
				</Banner.Badge>
				<Banner.Body>
					<Heading style={{ marginBottom: `${theme.gutter}px` }}>
						We understand that coming to church can be a strange
						thing...
					</Heading>
					<Paragraph>
						We're a very laid back bunch, we come in all shapes and
						sizes and we come from all sorts of different
						backgrounds. One thing we all have in common ... we were
						all once new to the church.
					</Paragraph>
				</Banner.Body>
			</Banner>
			{
				<AboutStripe
					color="#A8614B"
					style={{
						color: "white",
					}}
				>
					<Stripe.Caption>
						<Title
							style={{ marginBottom: `${theme.gutter * 2}px` }}
						>
							{about.title}
						</Title>
						<Paragraph>
							We are part of the Newfrontiers and New Ground
							family of churches.
							<br />
							<br />
							We believe in the Bible. All of it.
							<br />
							<br />
							We love baptism in the Holy Spirit.
							<br />
							<br />
							We encourage the use of spiritual gifts.
							<br />
							<br />
							We believe in baptism of believers not babies.
							<br />
							<br />
							We are committed to building a local church.
						</Paragraph>
					</Stripe.Caption>
					<Stripe.Figure>
						<img src="/assets/images/ii_k3a320gz2.png" />
					</Stripe.Figure>
				</AboutStripe>
			}
			<Container>
				<Heading style={{ marginBottom: `${theme.gutter * 2}px` }}>
					Here are some dos
				</Heading>
				<Grid style={{ marginBottom: "100px" }}>
					{props?.doc?.data.dos.map(({ title, description }, index) => (
						<Card key={index}>
							<Card.Body>
								<Caption>{title}</Caption>
								<Paragraph>{description}</Paragraph>
							</Card.Body>
						</Card>
					))}
				</Grid>
				<Heading style={{ marginBottom: `${theme.gutter * 2}px` }}>
					Here are some don'ts
				</Heading>
				<Grid>
					{props?.doc?.data.dont.map(({ title, description }, index) => (
						<Card key={index}>
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

About.getInitialProps = async (context) => {
	const req = context.req;
	const data = await Client(req).getSingle('about');
	// No the prismic data is populated in the props.doc
	return {
		doc: data
	}
}

export default About;
