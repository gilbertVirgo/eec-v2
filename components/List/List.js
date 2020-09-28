import { Item, Wrapper, animationLength } from "./styles";

import React from "react";

export const List = ({ children, stagger, ...props }) => {
	return (
		<Wrapper stagger={stagger} {...props}>
			{stagger
				? children.map((child, index) =>
						React.cloneElement(child, {
							style: {
								animationDelay: `${
									index * 1.5 * animationLength
								}ms`,
							},
						})
				  )
				: children}
		</Wrapper>
	);
};

List.Item = ({ children, ...props }) => <Item {...props}>{children}</Item>;
