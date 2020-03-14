import React from "react";
import { render } from "@testing-library/react";

import { Partners } from "../../components";

describe("Partners", () => {
  test("Matches snapshot", () => {
    const { container } = render(<Partners />);

    expect(container).toMatchSnapshot();
  });
});
