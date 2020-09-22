import { Title as DefaultTitle } from "..";
import styled from "styled-components";

const borderWidth = 8;

export const Wrapper = styled.div`
	border: ${borderWidth}px solid ${({ color }) => color};

	.badge-header {
		background-color: ${({ color }) => color};
	}
`;
export const Header = styled.div.attrs({ className: "badge-header" })`
	padding-bottom: ${borderWidth - 1}px;
	display: flex;
	justify-content: center;
`;
export const Title = styled(DefaultTitle)`
	color: ${({ color }) => color};
	margin: 8px 0 4px;
	text-align: center;
`;
