import styled, { css, keyframes } from "styled-components";

import { fadeIn } from "../components/List/styles";
import theme from "../theme";

export const Tagline = styled.img.attrs({ src: "/assets/icons/tagline.svg" })`
	transform-origin: left;
	width: 100%;
	display: block;
	margin-bottom: ${theme.gutter}px;
	opacity: 0;
	animation: ${fadeIn} ${({ animationLength }) => animationLength}ms forwards;
	animation-delay: ${({ animationLength }) => 6 * 1.5 * animationLength}ms;
`;
