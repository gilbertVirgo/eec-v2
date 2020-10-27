import { Paragraph } from "..";
import React from "react";
import Spinner from "react-loader-spinner";
import { Wrapper } from "./styles";
import theme from "../../theme";

export const ActivityIndicator = ({ children, inverted, ...props }) => {
	const color = inverted ? "white" : "black";

	return (
		<Wrapper {...props}>
			<Spinner type="Oval" color={color} width={40} height={40} />
			<Paragraph style={{ marginTop: theme.gutter + "px", color }}>
				{children}
			</Paragraph>
		</Wrapper>
	);
};
