import query from "./query";

const parse = (results) => results.map(({ data }) => data);


export const fetchLeaders = async () => {
	let results = await query("leaders");
	results = parse(results)
	//.map(({ data }) => data);
	return results

}
	
	
