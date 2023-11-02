import {
	BadgeWrapper,
	Columns,
	Gradient,
	Image,
	ImageWrapper,
	StripeWrapper,
} from "../styles/leaders";
import { Caption, Paragraph } from "../components";

import Badge from "../components/Badge";
import { Banner } from "../components/Banner";
import Layout from "../components/Layout";
import Stripe from "../components/Stripe";
import initLax from "../scripts/initLax";
import { fetchLeaders } from "../scripts/leaders";
import theme from "../theme";
import ActivityIndicator from "../components/ActivityIndicator";
import React from "react";

const colors = ["#615737","#645B4C", "#465363", "#626749"].map(
	(color) => theme.color[color]
);


export default function Leaders() {
	const [leaders, setLeaders] = React.useState();
	const [loading, setLoading] = React.useState(true)
	const [windowHeight, setWindowHeight] = React.useState();

	React.useEffect(() => {
		(async function () {
			const leaders = await fetchLeaders();
			setLeaders(leaders);

			setLoading(false);
			setWindowHeight(window.innerHeight);
		
		}) ();
			initLax();
	}, []);

	return (
		<Layout.Default title="Leaders" style={{ color: "white" }}>
			<Banner src="/assets/images/leaders.jpg">
				<Banner.Badge
					borderColor="#615737"
					starColor="white"
					textColor="white"
				>
					Leaders
				</Banner.Badge>
			</Banner>
			<StripeWrapper>
				{leaders ? (
					leaders.map(({ title, image, testimony, location, job, family, badge_color, link_image}, index) => {
						return (
							<Stripe 
							    noLax
							    sticky={windowHeight > 600}
						     	color={badge_color}
								key={`leaders-stripe-${index}`}
								expands
							>
								<BadgeWrapper>
									<Badge
										borderColor="white"
							    		starColor={badge_color}
										textColor="white"
									>
									{title}
									</Badge>
								</BadgeWrapper>
							<ImageWrapper
							>
								<Image src={link_image.url}/>
							</ImageWrapper>
								<Columns>
								<div>
									<Caption>Testimony</Caption>
									<Paragraph>
										<React.Fragment>
											{testimony}							
										</React.Fragment>
									</Paragraph>
								</div>
								<div>
									<Caption>
										Likes and dislikes about east London?
									</Caption>
									<Paragraph>{location}</Paragraph>
								</div>
								<div>
									<Caption>Family, Kids, Pets?</Caption>
									<Paragraph>{family}</Paragraph>
								</div>
								<div>
									<Caption>
										What do you do Monday to Friday?
									</Caption>
									<Paragraph>{job}</Paragraph>
								</div>
								</Columns>
							</Stripe>
						);
					})
					) : (
						<ActivityIndicator> Loading leaders...</ActivityIndicator>
					)
				}
			</StripeWrapper>
		</Layout.Default>
	);
}
