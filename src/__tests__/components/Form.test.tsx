import React from "react";
import { render } from "@testing-library/react";

import { Form } from "../../components";

const mapToAttribute = (attribute: string) => (element: HTMLElement) =>
  element.getAttribute(attribute);

describe("Form", () => {
  test("Matches snapshot for partners", () => {
    const { container } = render(
      <Form type="partners" handleSubmit={jest.fn()} />
    );

    expect(container).toMatchSnapshot();
  });

  test("Matches snapshot for all", () => {
    const { container } = render(<Form type="all" handleSubmit={jest.fn()} />);

    expect(container).toMatchSnapshot();
  });

  test("Renders correct fields for partners", () => {
    const { getAllByTestId } = render(
      <Form type="partners" handleSubmit={jest.fn()} />
    );

    const fields = getAllByTestId(/^field-/);

    expect(fields).toHaveLength(7);
    expect(fields.map(mapToAttribute("name"))).toEqual([
      "name",
      "email",
      "phone",
      "workplace",
      "message",
      "money",
      "startDate"
    ]);
  });

  test("Renders correct fields for all", () => {
    const { getAllByTestId } = render(
      <Form type="all" handleSubmit={jest.fn()} />
    );

    const fields = getAllByTestId(/^field-/);

    expect(fields).toHaveLength(6);
    expect(fields.map(mapToAttribute("name"))).toEqual([
      "name",
      "email",
      "phone",
      "messageall",
      "compliments",
      "recommendations"
    ]);
  });
});
