import query from "./query";

export const fetchMeetingInfo = async () =>
	(await query("meeting_info")).map(({ data }) => data)[0];

export const fetchHighlightedEvent = async () => {
	const highlightedEvent = await query("highlighted_event");
	const { id } = highlightedEvent[0].data.highlighted_event;

	console.log({ id });

	const event = await query(id, "id");

	console.log("THIS IS HE", event[0].data);

	return event[0].data;
};
