import React from "react";
import { render } from "@testing-library/react";

import { ThankYou } from "../../components";

describe("ThankYou", () => {
  test("Matches snapshot", () => {
    const { container } = render(<ThankYou />);

    expect(container).toMatchSnapshot();
  });
});
