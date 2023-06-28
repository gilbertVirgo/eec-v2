import convert from "xml-js";

export const getXMLProperty = (itemProps, tagName) => {
	const item = itemProps.find(({ name }) => name === tagName);

	if (item && item.hasOwnProperty("elements")) return item.elements[0].text;

	return "";
};

export const getXMLAttribute = (itemProps, tagName, attrName, backup) => {
	const tag = itemProps.find(({ name }) => name === tagName);
	if (!tag) return backup;
	return tag.attributes[attrName];
};

export const parse = (episode) => {
	let description = episode.find(({ name }) => name === "description");
	description =
		Array.isArray(description.elements) &&
		description.elements[0].cdata.replace(/<\/?[^>]+(>|$)/g, "");

	const seriesTitle = getXMLProperty(episode, "itunes:summary");

	return {
		title: getXMLProperty(episode, "title"),
		author: getXMLProperty(episode, "itunes:author"),
		pubDate: new Date(getXMLProperty(episode, "pubDate")),
		url: getXMLAttribute(episode, "enclosure", "url"),
		image: getXMLAttribute(
			episode,
			"itunes:image",
			"href",
			"https://uca13b4a29294405e2b3e50fff9e.previews.dropboxusercontent.com/p/thumb/AB9B0EEoboZK7VvALUIQfVhXD35uAq4xsSE4GrWjpayDpxTmWP159I-YwZvt3hic1IY52U86zFEHJrnmijx8P6ZQ-Xn2bi5eczz3ypBHrYz0KpYpeHkCqxalS9k1j0JxMXbsqQmz0NShq3o_6XDo8XHV1CMeAz4pI5t3L9GjhBcmy95ZPJBGtP4HYQAyRJZPmCJ-SxoIOpEoZ7EyXXw5zWApu9-oihQQMc9Ebp1AFzEGHMB69tpnEAQEHnvW1gldOrJD-7O4hJMC5-4EJvculuEPAnbxWRKOxaejsc69uK_v_oz0MwmmTXupcfAvjHYMBYCYLyvIMpFw0kO96JKqFjJKKYgIcIA6cyZjtfPNeFwYrRvcnyTOQ5vt6Nbj0rjufz4/p.png"
		),
		description,
		seriesTitle: description !== seriesTitle ? seriesTitle : undefined,
	};
};

export const splitIntoPages = (episodes) => {
	const pageLength = 10;

	const pages = [];

	episodes.forEach((episode, index) => {
		const pageNumber = Math.floor(index / pageLength);
		if (!pages[pageNumber]) {
			pages[pageNumber] = [episode];
		} else {
			pages[pageNumber].push(episode);
		}
	});

	return pages;
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

	return channel.elements
		.filter(({ name }) => name === "item")
		.map(({ elements }) => elements)
		.map(parse)
		.sort(({ pubDate: a }, { pubDate: b }) => new Date(b) - new Date(a));
};
