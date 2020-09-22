import { Item, Wrapper } from "./styles";

import React from "react";

export const List = ({ children, ...props }) => {
	return <Wrapper {...props}>{children}</Wrapper>;
};

List.Item = ({ children, ...props }) => <Item {...props}>{children}</Item>;
