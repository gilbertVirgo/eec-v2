import query from "./query";

export const fetchTeams = async () =>
	(await query("team")).map(({ data }) => data);
