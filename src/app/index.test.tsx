import { render, screen } from "@testing-library/react";

import Home from "./page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: /Hello, World!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
