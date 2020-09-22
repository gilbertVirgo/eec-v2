import { Paragraph } from "..";
import React from "react";
import Spinner from "react-loader-spinner";
import { Wrapper } from "./styles";

export const ActivityIndicator = ({ children, inverted, ...props }) => {
	const color = inverted ? "white" : "black";

	return (
		<Wrapper {...props}>
			<Spinner type="Oval" color={color} width={40} height={40} />
			<Paragraph style={{ color }}>{children}</Paragraph>
		</Wrapper>
	);
};
