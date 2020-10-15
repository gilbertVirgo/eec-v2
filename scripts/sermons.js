import convert from "xml-js";

export const getXMLProperty = (itemProps, tagName) => {
	const item = itemProps.find(({ name }) => name === tagName);

	if (item.hasOwnProperty("elements")) return item.elements[0].text;
	else console.log(item);
	return "null";
};

export const getXMLAttribute = (itemProps, tagName, attrName) => {
	return itemProps.find(({ name }) => name === tagName).attributes[attrName];
};

export const parse = (episode) => {
	let description = episode.find(({ name }) => name === "description");
	description =
		Array.isArray(description.elements) &&
		description.elements[0].cdata.replace(/<\/?[^>]+(>|$)/g, "");

	console.log({ description });

	return {
		title: getXMLProperty(episode, "title"),
		author: getXMLProperty(episode, "itunes:author"),
		pubDate: new Date(getXMLProperty(episode, "pubDate")),
		url: getXMLAttribute(episode, "enclosure", "url"),
		image: getXMLAttribute(episode, "itunes:image", "href"),
		description,
	};
};

export const fetchPodcastEpisodes = async () => {
	const response = await fetch(
		"https://feed.podbean.com/eastendchurchlondon/feed.xml",
		{ method: "GET" }
	);
	const xml = await response.text();

	const json = convert.xml2json(xml, { compact: false, spaces: 4 });

	const { elements } = JSON.parse(json);
	const rss = elements.find(({ name }) => name === "rss");
	const channel = rss.elements.find(({ name }) => name === "channel");

	console.log({ channel });

	return channel.elements
		.filter(({ name }) => name === "item")
		.map(({ elements }) => elements)
		.map(parse);
};
