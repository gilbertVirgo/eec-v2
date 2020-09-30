import query from "./query";

export const fetchTeams = async () => {
	let results = await query("team");

	results = results.map(({ data }) => data);

	return results;
};
