import query from "./query";

export const fetchEvents = async () => {
	let results = await query("event");

	results = results.map(({ data }) => data);

	// Sort in date order
	results = results.sort((a, b) => new Date(a.date) - new Date(b.date));

	console.log(results);

	return results;
};

export const fetchRegularEvents = async () => {};
