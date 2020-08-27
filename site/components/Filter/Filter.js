import { Container } from "./styles";
import InputRange from "react-input-range";
import React from "react";

export const Filter = ({ children }) => {
	const [range, setDuration] = React.useState({
		value: { min: 2, max: 10 },
	});

	return (
		<Container>
			<div>Filters</div>

			<InputRange
				maxValue={20}
				minValue={0}
				value={range.value}
				onChange={(value) => this.setState({ value })}
			/>
		</Container>
	);
};
