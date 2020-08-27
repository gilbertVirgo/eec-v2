import { Caption, Group, Heading, Paragraph } from "../components";

import Badge from "../components/Badge";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import List from "../components/List";
import Pin from "../public/assets/icons/pin.svg";
import Stripe from "../components/Stripe";
import theme from "../theme";

import { Row, Icon } from "./styles/contact.js";

export default function Home() {
    return (
        <Layout.Default title="Home" style={{ color: "white" }}>
            <Banner
                src="/assets/images/contact.png"
                gridProps={{ style: { rowGap: theme.gutter + "px" } }}
                style={{ "padding": "0px;" }}
            >
                <Banner.Badge
                    borderColor="#615737"
                    starColor="white"
                    textColor="white"
                >
                    Contact
				</Banner.Badge>
                <Banner.Body center>
                    <Row style={{
                        marginTop: "145px",
                    }}>
                        <Icon src="/assets/icons/phone.svg" />
                        <Paragraph>
                            <Paragraph>020 8616 9199</Paragraph>
                        </Paragraph>
                    </Row>
                    <Row>
                        <Icon src="/assets/icons/email.svg" />
                        <Paragraph>
                            <Paragraph>info@eastendchurch.co.uk</Paragraph>
                        </Paragraph>
                    </Row>
                </Banner.Body>
            </Banner>
            <Stripe
                color="#615737"
                style={{ marginBottom: "250px" }}
            >
                <Stripe.Badge
                    borderColor="white"
                    textColor="white"
                    starColor="#615737"
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
