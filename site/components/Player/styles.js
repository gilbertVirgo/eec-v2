import InputRange from "react-input-range";
import { Paragraph } from "..";
import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.div`
	background-color: ${({ inverted }) =>
		inverted ? "#ffffff40" : theme.color.light};
	display: flex;
	align-items: center;
	padding: ${theme.gutter}px;
	box-sizing: border-box;

	.input-range__track,
	.input-range__track--background {
		background: ${({ inverted }) =>
			inverted ? "white" : "black"} !important;
		.input-range__track.input-range__track--active {
			background: ${({ inverted }) =>
				inverted ? "white" : "black"} !important;
		}
	}
	.input-range__slider {
		background: ${({ inverted }) =>
			inverted ? "white" : "black"} !important;
	}
	.input-range__label {
		display: none;
	}
`;

const assetRoot = "/assets/icons/";

export const Play = styled.div`
	background-image: url("${assetRoot}${({ playing }) =>
		playing ? "pause" : "play"}-${({ inverted }) =>
		inverted ? "white" : "black"}.svg");
	background-size: cover;
	background-position: center;
	/* margin-right: ${theme.gutter * 2}px; */
	width: 40px !important;
	height: 40px;
`;
export const BarWrapper = styled.div`
	flex: 1;
	margin-left: ${theme.gutter}px;
`;
