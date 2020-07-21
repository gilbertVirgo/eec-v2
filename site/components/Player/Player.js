import {
	Back,
	CurrentTime,
	Duration,
	Play,
	Skip,
	StatusBar,
	Wrapper,
} from "./styles";

import React from "react";
import moment from "moment";

export const Player = ({ src, ...props }) => {
	const [currentTime, setCurrentTime] = React.useState(
		new Date(0, 0, 0, 0, 0, 0)
	);
	const [duration, setDuration] = React.useState(
		new Date(0, 0, 0, 0, 40, 23)
	);

	return (
		<Wrapper {...props}>
			<CurrentTime>{moment(currentTime).format("mm:ss")}</CurrentTime>
			<StatusBar currentTime={currentTime} />
			<Duration>{moment(duration).format("mm:ss")}</Duration>
			<Back />
			<Play />
			<Skip />
		</Wrapper>
	);
};
