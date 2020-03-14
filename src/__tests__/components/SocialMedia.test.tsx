import React from "react";
import { render } from "@testing-library/react";

import { SocialMedia } from "../../components";

describe("SocialMedia", () => {
  test("Matches snapshot", () => {
    const { container } = render(<SocialMedia />);

    expect(container).toMatchSnapshot();
  });
});
