import Prismic from "prismic-javascript";

export const fetchTeams = async () => {
	const api = await Prismic.api(
		"https://eastendchurch.cdn.prismic.io/api/v2",
		{
			accessToken:
				"MC5YekJzU1JJQUFDSUE1UUwx.77-977-9EXtuZyjvv71BNu-_vTTvv73vv73vv711MO-_ve-_ve-_ve-_vX_vv73vv73vv70A77-977-9J0FDMQ",
		}
	);
	let { results } = await api.query(
		Prismic.Predicates.at("document.type", "team")
	);

	results = results.map(({ data }) => data);

	return results;
};
