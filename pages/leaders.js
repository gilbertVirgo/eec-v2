import {
	BadgeWrapper,
	Columns,
	Gradient,
	ImageWrapper,
	StripeWrapper,
} from "../styles/leaders";
import { Caption, Paragraph } from "../components";

import Badge from "../components/Badge";
import { Banner } from "../components/Banner";
import Layout from "../components/Layout";
import Stripe from "../components/Stripe";
import initLax from "../scripts/initLax";
import leaders from "../data/leaders";

export default function Leaders() {
	const [windowHeight, setWindowHeight] = React.useState();

	React.useEffect(() => {
		initLax();

		setWindowHeight(window.innerHeight);
	}, []);

	return (
		<Layout.Default title="Leaders" style={{ color: "white" }}>
			<Banner src="/assets/images/leaders.jpg">
				<Banner.Badge
					borderColor={leaders[0].color}
					starColor="white"
					textColor="white"
				>
					Leaders
				</Banner.Badge>
			</Banner>
			<StripeWrapper>
				{leaders.map(({ name, color, image, content }, index) => (
					<Stripe
						sticky={windowHeight > 600}
						color={color}
						key={`leaders-stripe-${index}`}
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
						<ImageWrapper
							className="lax"
							data-lax-scale="vh 0.7, -vh 1"
							data-lax-anchor="self"
						>
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
								<Caption>
									What do you do monday to friday?
								</Caption>
								<Paragraph>{content.job}</Paragraph>
							</div>
						</Columns>
					</Stripe>
				))}
			</StripeWrapper>
		</Layout.Default>
	);
}
