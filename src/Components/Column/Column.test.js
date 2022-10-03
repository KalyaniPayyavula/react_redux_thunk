/* eslint-disable no-undef */
/* eslint-disable react/no-children-prop */
import { render, screen } from "@testing-library/react";
import { Column } from "./Column";

test("Column component", () => {
	render(
		<Column dataTestId="test-column">
			<p>{["one", "two"]}</p>
		</Column>
	);

	expect(screen.getByTestId("test-column").textContent).toBe("onetwo");
});

test("Snapshot for Column component", () => {
	render(
		<Column
			children={<p>childOne</p>}
			label="test"
			dataTestId="test-column"
		/>
	);

	expect(screen.getByTestId("test-column").textContent).toMatchSnapshot();
});
