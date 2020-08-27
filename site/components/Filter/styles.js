import styled from "styled-components";
import theme from "../../theme";
import Icon from "../../public/assets/icons/search_icon.svg";

export const SermonList = styled.div`
	div {
		font-weight: 300;
		font-size: 16px;
		line-height: 32px;
	}
`;

export const SearchIcon = styled(Icon)`
	position: relative;
	top: 2px;
	left: 10px;
`;

export const SearchInput = styled.input`
	border: 0px;
    padding: 5px;
    padding-left: 40px;
    border-bottom: 2px solid black;
	margin-bottom: 33px;
	margin-top: 22px;
	margin-left: -15px;

	&::placeholder {
		font-style: normal;
		font-weight: 300;
		font-size: 11px;
		line-height: 21px;
		color: #666666;
	}

	&:focus {
		outline: none !important;
	}
`;

export const Container = styled.div`
	grid-column: span 3;

	.input-range__slider {
		appearance: none;
		background: #3f51b5;
		border: 1px solid #3f51b5;
		border-radius: 100%;
		cursor: pointer;
		display: block;
		height: 1rem;
		margin-left: -0.5rem;
		margin-top: -0.65rem;
		outline: none;
		position: absolute;
		top: 50%;
		transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
		width: 1rem; }
		.input-range__slider:active {
			transform: scale(1.3); }
		.input-range__slider:focus {
			box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2); }
		.input-range--disabled .input-range__slider {
			background: #cccccc;
			border: 1px solid #cccccc;
			box-shadow: none;
			transform: none; }

		.input-range__slider-container {
		transition: left 0.3s ease-out; }

		.input-range__label {
		color: #aaaaaa;
		font-family: "Helvetica Neue", san-serif;
		font-size: 0.8rem;
		transform: translateZ(0);
		white-space: nowrap; }

		.input-range__label--min,
		.input-range__label--max {
		bottom: -1.4rem;
		position: absolute; }

		.input-range__label--min {
		left: 0; }

		.input-range__label--max {
		right: 0; }

		.input-range__label--value {
		position: absolute;
		top: -1.8rem; }

		.input-range__label-container {
		left: -50%;
		position: relative; }
		.input-range__label--max .input-range__label-container {
			left: 50%; }

		.input-range__track {
		background: #eeeeee;
		border-radius: 0.3rem;
		cursor: pointer;
		display: block;
		height: 0.3rem;
		position: relative;
		transition: left 0.3s ease-out, width 0.3s ease-out; }
		.input-range--disabled .input-range__track {
			background: #eeeeee; }

		.input-range__track--background {
		left: 0;
		margin-top: -0.15rem;
		position: absolute;
		right: 0;
		top: 50%; }

		.input-range__track--active {
		background: #3f51b5; }

		.input-range {
		height: 1rem;
		position: relative;
		width: 100%; }

		.input-range__slider {
			background: #000000;
			margin-top: -0.45rem;
			width: 0.65rem;
			height: 0.65rem;
			border-color: #000000;
		}

		.input-range__track--active {
			background: #000000;
		}

		.input-range__track {
			height: 2px;
		}

		.input-range__label--min, .input-range__label--max {
			display: none;
		}

		.input-range__label--value {
			position: absolute;
			top: 12px;
			color: black;
			font-size: 16px;
		}
`;