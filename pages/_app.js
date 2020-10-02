import "../styles/react-audio-player-custom.css";
import "../styles/input-range-custom.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import App from "next/app";
import React from "react";

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return <Component {...pageProps} />;
	}
}

export default MyApp;
