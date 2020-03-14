import React from "react";
import { render } from "@testing-library/react";

import { Video } from "../../components";

describe("Video", () => {
  test("Matches snapshot", () => {
    const { container } = render(
      <Video videos={[{ src: "test-video-url", title: "test-video-title" }]} />
    );

    expect(container).toMatchSnapshot();
  });
});
