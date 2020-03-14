import React from "react";
import { render } from "@testing-library/react";

import { Error } from "../../components";

describe("Error", () => {
  test("Matches snapshot", () => {
    const { container } = render(<Error />);

    expect(container).toMatchSnapshot();
  });
});
