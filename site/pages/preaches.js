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
import Filter from "../components/Filter";
import Player from "../components/Player";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Stripe from "../components/Stripe";
import { sermons } from "./data/preaches";
import styled from "styled-components";
import theme from "../theme";

export default function About() {
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
                    <Paragraph>EVANS BISSESSAR.</Paragraph>
                    <Player></Player>
                </Banner.Body>
            </Banner>
            <Container>
                <Heading style={{ marginBottom: "48px"}}>
                    Previous Weeks
                </Heading>
                <Grid>
                    <Filter>one 1</Filter>
                    {sermons.map(({ title, description, image }) => (
                        <Card>
                            <Card.Image src={image} />
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
