import { Body, Image, Wrapper } from "./styles";

import React from "react";

export const Card = ({ children, ...props }) => {
	return <Wrapper {...props}>{children}</Wrapper>;
};

Card.Image = ({ src }) => <Image src={src} />;
Card.Body = ({ children, ...props }) => <Body {...props}>{children}</Body>;
