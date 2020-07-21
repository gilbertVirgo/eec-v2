import { Header, Title, TitleWrapper, Wrapper } from "./styles";

import React from "react";
import Star from "../../public/assets/icons/star.svg";

export const Badge = ({ children, borderColor, textColor, starColor }) => {
	return (
		<Wrapper color={borderColor}>
			<Header>
				<Star fill={starColor} />
			</Header>
			<Title color={textColor}>{children}</Title>
		</Wrapper>
	);
};
