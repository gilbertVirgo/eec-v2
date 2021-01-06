import ActivityIndicator from "../../ActivityIndicator";
import Footer from "../../Footer";
import Head from "next/head";
import Header from "../../Header";
import React from "react";

export const DefaultLayout = ({ children, title, loading, ...props }) => {
	return !loading ? (
		<main {...props}>
			<Head>
				<title>{title} | East End Church</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			{children}
			<Footer />
		</main>
	) : (
		<ActivityIndicator fullScreen>Loading...</ActivityIndicator>
	);
};
