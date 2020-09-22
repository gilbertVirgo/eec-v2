import convert from "xml-js";

export const fetchPodcastEpisodes = async () => {
	const response = await fetch(
		"https://feed.podbean.com/eastendchurchlondon/feed.xml",
		// "http://dynamic.church123.com/podcast/48df8ba9-7b96-4938-8f90-3d405b2fd5ff/feed.xml",
		{ method: "GET" }
	);
	const xml = await response.text();

	const json = convert.xml2json(xml, { compact: false, spaces: 4 });

	const { elements } = JSON.parse(json);
	const rss = elements.find(({ name }) => name === "rss");
	const channel = rss.elements.find(({ name }) => name === "channel");

	return channel.elements
		.filter(({ name }) => name === "item")
		.map(({ elements }) => elements);
};

export const getXMLProperty = (itemProps, tagName) => {
	const item = itemProps.find(({ name }) => name === tagName);

	if (item.hasOwnProperty("elements")) return item.elements[0].text;
	else console.log(item);
	return "null";
};

export const getXMLAttribute = (itemProps, tagName, attrName) => {
	return itemProps.find(({ name }) => name === tagName).attributes[attrName];
};

export const runTextFilter = (items, filter) => {
	return items.filter({});
};
