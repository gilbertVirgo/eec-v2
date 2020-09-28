import styled, { css, keyframes } from "styled-components";

import theme from "../theme";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const Tagline = styled.img.attrs({ src: "/assets/icons/tagline.svg" })`
	width: 100%;
	display: block;
	margin-bottom: ${theme.gutter}px;
	opacity: 0;
	animation: ${fadeIn} ${({ animationLength }) => animationLength}ms forwards;
	animation-delay: ${({ animationLength }) => 6 * 1.5 * animationLength}ms;
`;
