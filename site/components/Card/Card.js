import React from "react";
import { Wrapper } from "./styles";

export const Card = ({ children, ...props }) => {
	return <Wrapper {...props}>{children}</Wrapper>;
};

Card.Image = () => {}; //...
