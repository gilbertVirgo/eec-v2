import { BarWrapper, Play, Wrapper } from "./styles";

import { ActivityIndicator } from "../ActivityIndicator/ActivityIndicator";
import InputRange from "react-input-range";
import React from "react";

export const Player = ({ src, inverted, ...props }) => {
	const [currentTime, setCurrentTime] = React.useState(
		new Date(0, 0, 0, 0, 0, 0)
	);
	const [playing, setPlaying] = React.useState(false);
	const audio = React.useRef(null);
	const [canPlay, setCanPlay] = React.useState(false);

	const updatePlayhead = () => {
		setCurrentTime(audio.current.currentTime);
	};

	React.useEffect(() => {
		let updateInterval;

		if (audio.current) {
			clearInterval(updateInterval);
			updateInterval = setInterval(updatePlayhead, 500);
		}

		return () => {
			// Cleanup
			clearInterval(updateInterval);
		};
	}, [audio.current]);

	React.useEffect(() => {
		if (audio.current) {
			if (playing) audio.current.play();
			else audio.current.pause();
		}
	}, [playing]);

	const handleMovePlayhead = (value) => {
		audio.current.currentTime = value;
		setCurrentTime(value);
	};

	return (
		<React.Fragment>
			<audio ref={audio} onCanPlay={() => setCanPlay(true)} hidden>
				<source src={src} type="audio/mpeg" />
			</audio>
			{canPlay ? (
				<Wrapper {...props} inverted={inverted}>
					<Play
						inverted={inverted}
						playing={playing}
						onClick={() => setPlaying(!playing)}
					/>

					<BarWrapper>
						<InputRange
							maxValue={audio.current.duration}
							value={currentTime}
							onChange={handleMovePlayhead}
						/>
					</BarWrapper>
				</Wrapper>
			) : (
				<ActivityIndicator inverted={inverted}>
					Loading player...
				</ActivityIndicator>
			)}
		</React.Fragment>
	);
};
