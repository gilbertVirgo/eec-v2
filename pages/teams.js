import {
	Caption,
	Container,
	Grid,
	Heading,
	Paragraph,
	Subheading,
} from "../components";

import { ActivityIndicator } from "../components/ActivityIndicator/ActivityIndicator";
import { Banner } from "../components/Banner";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Stripe from "../components/Stripe";
import { fetchTeams } from "../scripts/teams";
import initLax from "../scripts/initLax";
import theme from "../theme";

const colors = ["blue", "orange", "purple", "swampGreen"].map(
	(color) => theme.color[color]
);

export default function Teams() {
	const [teams, setTeams] = React.useState();

	React.useEffect(() => {
		(async function () {
			const teams = await fetchTeams();

			setTeams(teams);

			setTimeout(initLax);
		})();
	}, []);

	return (
		<Layout.Default title="Teams">
			<Banner src="/assets/images/teams.jpg">
				<Banner.Badge
					borderColor={theme.color.purple}
					starColor="white"
					textColor="white"
				>
					Teams
				</Banner.Badge>
			</Banner>
			{teams ? (
				teams.map(({ title, description, helper }, index) => {
					const color = colors[index % colors.length];

					return (
						<Stripe color={color} key={`teams-stripe-${index}`}>
							<Stripe.Badge
								borderColor="white"
								textColor="white"
								starColor={color}
							>
								{title}
							</Stripe.Badge>
							<Stripe.Body style={{ color: "white" }} center>
								<Paragraph>{description}</Paragraph>
							</Stripe.Body>
							<Stripe.FigureGrid>
								{helper.map(
									(
										{ names, image, location },
										helperIndex
									) => (
										<Card
											key={`teams-stripe-${index}-helper-${helperIndex}`}
											style={{
												transformOrigin: `50% 50%`,
											}}
											className="lax"
											data-lax-anchor="self"
											data-lax-scale="vh 0.75, -vh 1.1"
										>
											<Card.Image src={image.url} />
											<Card.Body>
												<Subheading>{names}</Subheading>
												{location && (
													<Paragraph>
														{location}
													</Paragraph>
												)}
											</Card.Body>
										</Card>
									)
								)}
							</Stripe.FigureGrid>
						</Stripe>
					);
				})
			) : (
				<ActivityIndicator>Loading teams...</ActivityIndicator>
			)}
		</Layout.Default>
	);
}
