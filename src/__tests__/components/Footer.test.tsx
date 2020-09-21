import React from "react";
import { render } from "@testing-library/react";

import { Footer } from "../../components";

describe("Footer", () => {
  test("Matches snapshot", () => {
    const { container } = render(<Footer currentYear={2020} />);

    expect(container).toMatchSnapshot();
  });
});
