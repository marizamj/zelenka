import React from "react";
import { render } from "@testing-library/react";

import { Header } from "../../components";

describe("Header", () => {
  test("Matches snapshot", () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
