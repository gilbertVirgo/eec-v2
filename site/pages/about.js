import {
    BadgeWrapper,
    Columns,
    Gradient,
    ImageWrapper,
} from "./styles/leaders";

import { Caption, Container, Grid, Group, Heading, Paragraph } from "../components";

import Card from "../components/Card";
import List from "../components/List";
import Badge from "../components/Badge";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Stripe from "../components/Stripe";
import { about, dos, dont } from "./data/about";
import styled from "styled-components";
import theme from "../theme";

export default function About() {
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
                    <Heading>We understand that coming to church can be a strange thing...</Heading>
                    <Paragraph> We're a very laid back bunch, we come in all shapes and sizes and we come from all sorts of different backgrounds. One thing we all have in common ... we were all once new to the church.</Paragraph>
                </Banner.Body>
            </Banner>
            {
                <Stripe
                    color={about.color}
                    style={{ overflow: "hidden", color: "white" }}
                    expands
                >
                    <Stripe.Caption>
                        <Heading>{about.title}</Heading>
                        <Paragraph style={{ whiteSpace: "pre-line", lineHeight: 1}} >
                                {about.description}
					        </Paragraph>
                    </Stripe.Caption>
                    <Stripe.Figure>
                        <img src="/assets/images/ii_k3a320gz2.png" />
                    </Stripe.Figure>
                </Stripe>
            }
            <Container>
                <Heading style={{ marginBottom: "48px", paddingLeft: "15px" }}>
                        Here are some do’s
                </Heading>
                <Grid>
                    {dos.map(({ title, description }, index) => (
                        <Card key={index}>
                            <Card.Body>
                                <Caption>{title}</Caption>
                                <Paragraph>{description}</Paragraph>
                            </Card.Body>
                        </Card>
                    ))}
                </Grid>
                <Heading style={{ marginBottom: "48px", marginTop: "100px", paddingLeft: "15px" }}>
                    Here are some dont’s
				</Heading>
                <Grid>
                    {dos.map(({ title, description }, index) => (
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
