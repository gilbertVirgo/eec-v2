import query from "./query";

export const fetchMeetingInfo = async () =>
	(await query("meeting_info"))[0].data.text;

export const fetchHighlightedEvent = async () => {
	const highlightedEvent = (await query("highlighted_event"))[0].data
		.highlighted_event;

	if (highlightedEvent.hasOwnProperty("id")) {
		const event = await query(highlightedEvent.id, "id");
		return event.length && event[0].data;
	} else return null;
};
