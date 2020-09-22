import { createBreakpoint, createMap } from "styled-components-breakpoint";

const breakpoints = {
	xs: 0,
	sm: 320,
	md: 640,
	lg: 960,
	xl: 1280,
};

export default {
	gutter: 15,
	shadow: `box-shadow: 0 3px 8px #00000030`,
	color: {
		mustard: "#B5B000",
		blue: "#37577B",
		orange: "#A8614B",
		purple: "#6F3B51",
		grey: "#463B40",
		light: "#E5E4DA",
	},
	font: {
		family: {
			body: `"Myriad Pro", sans-serif`,
			title: `"Bebas Neue", sans-serif; text-transform: uppercase; font-weight: 400`,
		},
	},
	map: createMap(breakpoints),
	breakpoint: createBreakpoint(breakpoints),
};
