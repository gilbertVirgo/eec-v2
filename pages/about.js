import {
	Container,
	Grid,
	Heading,
	Paragraph,
	Subheading,
	Title,
} from "../components";

import { Banner } from "../components/Banner";
import { default as DefaultStripe } from "../components/Stripe";
import Layout from "../components/Layout";
import about from "../data/about";
import initLax from "../scripts/initLax";
import styled from "styled-components";
import theme from "../theme";

const Stripe = styled(DefaultStripe)`
	margin-bottom: 50px;
	${theme.breakpoint("md")`
		margin-bottom: 150px;
	`}
`;

const Card = styled.div`
	grid-column: 1 / -1;

	${theme.breakpoint("md")`
		grid-column: ${({ column }) => `${column} / ${column + 3}`}};
	`}
`;

export default function About() {
	const [windowHeight, setWindowHeight] = React.useState();

	React.useEffect(() => {
		initLax();

		setWindowHeight(window.innerHeight);
	}, []);

	return (
		<Layout.Default title="About">
			<Banner src="/assets/images/banner.png" style={{ color: "white" }}>
				<Banner.Badge
					starColor="white"
					borderColor={theme.color.orange}
				>
					About
				</Banner.Badge>
				<Banner.Body>
					<Heading>
						We understand that coming to church can be a strange
						thing...
					</Heading>
					<Paragraph>
						We're a very laid back bunch, we come in all shapes and
						sizes and we come from all sorts of different
						backgrounds. One thing we all have in common... we were
						all once new to the church.
					</Paragraph>
				</Banner.Body>
			</Banner>

			<Stripe color={theme.color.orange}>
				<Stripe.Body style={{ color: "white" }}>
					<Title>What sort of church are we?</Title>
					<Paragraph>
						We are part of the{" "}
						<a
							style={{ fontWeight: "bold" }}
							href="https://newfrontiers.org"
						>
							Newfrontiers
						</a>{" "}
						and{" "}
						<a
							style={{ fontWeight: "bold" }}
							href="https://newgroundchurches.org"
						>
							New Ground
						</a>{" "}
						family of churches. <br />
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
				</Stripe.Body>
				<Stripe.Figure>
					<img src="/assets/images/church.jpg" />
				</Stripe.Figure>
			</Stripe>
			<Stripe
				className="lax"
				data-lax-opacity="vh 0, 250px 1"
				data-lax-anchor="self"
				expands
				expandsAll
				color={theme.color.swampGreen}
			>
				<Stripe.Badge
					textColor="white"
					starColor={theme.color.swampGreen}
					borderColor="white"
				>
					Some Do's
				</Stripe.Badge>
				<Stripe.FigureGrid
					style={{ color: "white", marginTop: "-45px" }}
				>
					{about.dos.map(({ title, body }, index) => (
						<Card
							key={`about-item-${index}`}
							column={(index % 3) * 4 + 1}
						>
							<Subheading>{title}</Subheading>
							<Paragraph>{body}</Paragraph>
						</Card>
					))}
				</Stripe.FigureGrid>
			</Stripe>

			<Stripe
				className="lax"
				data-lax-opacity="vh 0, 200px 1"
				data-lax-anchor="self"
				expands
				expandsAll
				color={theme.color.purple}
			>
				<Stripe.Badge
					textColor="white"
					starColor={theme.color.purple}
					borderColor="white"
				>
					Some Dont's
				</Stripe.Badge>
				<Stripe.FigureGrid
					style={{ color: "white", marginTop: "-45px" }}
				>
					{about.donts.map(({ title, body }, index) => (
						<Card
							key={`about-item-${index}`}
							column={(index % 3) * 4 + 1}
						>
							<Subheading>{title}</Subheading>
							<Paragraph>{body}</Paragraph>
						</Card>
					))}
				</Stripe.FigureGrid>
			</Stripe>
		</Layout.Default>
	);
}
