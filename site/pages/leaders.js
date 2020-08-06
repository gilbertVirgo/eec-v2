import {
	BadgeWrapper,
	Columns,
	Gradient,
	ImageWrapper,
} from "./styles/leaders";
import { Caption, Paragraph } from "../components";

import Badge from "../components/Badge";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Stripe from "../components/Stripe";
import leaders from "./data/leaders";
import styled from "styled-components";
import theme from "../theme";

export default function Leaders() {
	return (
		<Layout.Default title="Leaders" style={{ color: "white" }}>
			<Banner src="/assets/images/banner.png">
				<Banner.Badge
					borderColor={theme.color.mustard}
					starColor="white"
					textColor="white"
				>
					Leaders
				</Banner.Badge>
			</Banner>
			{leaders.map(({ name, color, image, content }, index) => (
				<Stripe
					color={color}
					style={{ overflow: "hidden" }}
					key={`leader-stripe-${index}`}
					expands
				>
					<BadgeWrapper>
						<Badge
							borderColor="white"
							starColor={color}
							textColor="white"
						>
							{name}
						</Badge>
					</BadgeWrapper>
					<ImageWrapper>
						<img src={image} />
						<Gradient color={color} />
					</ImageWrapper>
					<Columns>
						<div>
							<Caption>Testimony</Caption>
							<Paragraph>{content.testimony}</Paragraph>
						</div>
						<div>
							<Caption>
								Likes and dislikes about east London?
							</Caption>
							<Paragraph>{content.london}</Paragraph>
						</div>
						<div>
							<Caption>Family, Kids, Pets?</Caption>
							<Paragraph>{content.family}</Paragraph>
						</div>
						<div>
							<Caption>What do you do monday to friday?</Caption>
							<Paragraph>{content.job}</Paragraph>
						</div>
					</Columns>
				</Stripe>
			))}
		</Layout.Default>
	);
}
