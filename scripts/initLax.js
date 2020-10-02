import lax from "lax.js";

export default () => {
	lax.setup(); // init

	const updateLax = () => {
		lax.update(window.scrollY);
		if (running) window.requestAnimationFrame(updateLax);
	};

	window.requestAnimationFrame(updateLax);
};
