import query from "./query";

const parse = (results) => results.map(({ data }) => data);
const sort = (results) =>
	results.sort((a, b) => new Date(a.date) - new Date(b.date));

export const fetchEvents = async () => {
	let results = await query("event");

	results = parse(results);
	results = sort(results);

	console.log({ results }, typeof results);

	return results;
};

export const fetchRegularEvents = async () => {
	let results = await query("regular_event");

	results = parse(results);

	return results;
};
