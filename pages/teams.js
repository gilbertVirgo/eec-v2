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
import lax from "lax.js";
import theme from "../theme";

export default function Teams() {
	const [teams, setTeams] = React.useState();
	const [running, setRunning] = React.useState(true);

	React.useEffect(() => {
		(async function () {
			const teams = await fetchTeams();

			console.log("teams", teams);

			setTeams(teams);

			lax.setup(); // init

			const updateLax = () => {
				lax.update(window.scrollY);
				if (running) window.requestAnimationFrame(updateLax);
			};

			window.requestAnimationFrame(updateLax);
		})();

		return () => setRunning(false);
	}, []);

	return (
		<Layout.Default title="Teams">
			<Banner src="/assets/images/teams.png">
				<Banner.Badge
					borderColor={theme.color.purple}
					starColor="white"
					textColor="white"
				>
					Teams
				</Banner.Badge>
			</Banner>
			{teams ? (
				teams.map(({ title, description, helper }, index) => (
					<Stripe
						color={theme.color.purple}
						key={`teams-stripe-${index}`}
					>
						<Stripe.Badge
							borderColor="white"
							textColor="white"
							starColor={theme.color.purple}
						>
							{title}
						</Stripe.Badge>
						<Stripe.Body style={{ color: "white" }} center>
							<Paragraph>{description}</Paragraph>
						</Stripe.Body>
						<Stripe.FigureGrid>
							{helper.map(({ names, image }, helperIndex) => (
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
									</Card.Body>
								</Card>
							))}
						</Stripe.FigureGrid>
					</Stripe>
				))
			) : (
				<ActivityIndicator>Loading teams...</ActivityIndicator>
			)}
		</Layout.Default>
	);
}
