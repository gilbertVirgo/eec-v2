import { Caption, Group, Heading, Paragraph } from "../components";

import { CarouselContainer } from "../components/index";
import Badge from "../components/Badge";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import List from "../components/List";
import Pin from "../public/assets/icons/pin.svg";
import Player from "../components/Player";
import Stripe from "../components/Stripe";
import theme from "../theme";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
	return (
		<Layout.Default title="Home" style={{ color: "white" }}>

			<CarouselContainer style={{ marginBottom: "50px" }}>
				<Carousel showArrows={false} showThumbs={false} showStatus={false}>
					<div>
						<Banner
							src="/assets/images/banner.png"
							gridProps={{ style: { rowGap: theme.gutter + "px" } }}
						>
							<Banner.Badge
								borderColor={theme.color.mustard}
								starColor="white"
								textColor="white"
							>
								We don't care
							</Banner.Badge>
							<Banner.Body center>
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
						</Banner>
					</div>
					<div>

					</div>
					<div>
						
					</div>
				</Carousel>
			</CarouselContainer>
			<Stripe color={theme.color.blue}>
				<Stripe.Badge
					borderColor="white"
					textColor="white"
					starColor={theme.color.blue}
				>
					Coming up
				</Stripe.Badge>
				<Stripe.Caption>
					<Group>
						<Heading>Church Day Out</Heading>
						<List style={{ listStyleType: "none" }}>
							<List.Item icon="/assets/icons/pin.svg">
								<Caption>Victoria Park</Caption>
							</List.Item>
							<List.Item icon="/assets/icons/calendar.svg">
								<Caption>3rd August 2020</Caption>
							</List.Item>
						</List>
					</Group>

					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</Paragraph>
				</Stripe.Caption>
				<Stripe.Figure>
					<img src="/assets/images/picnic.jpg" />
				</Stripe.Figure>
			</Stripe>

			<Stripe color={theme.color.orange}>
				<Stripe.Badge
					borderColor="white"
					textColor="white"
					starColor={theme.color.orange}
				>
					Last Sunday
				</Stripe.Badge>
				<Stripe.Caption>
					<Group>
						<Heading>A Blind Man Sees</Heading>
						<List style={{ listStyleType: "none" }}>
							<List.Item icon="/assets/icons/speaker.svg">
								<Caption>Evans Bissessar</Caption>
							</List.Item>
						</List>
					</Group>

					<Group>
						<Paragraph>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</Paragraph>
					</Group>

					<Player />
				</Stripe.Caption>
				<Stripe.Figure>
					<img src="/assets/images/shorts.png" />
				</Stripe.Figure>
			</Stripe>
			<Stripe
				color={theme.color.purple}
				style={{ marginBottom: "500px" }}
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
