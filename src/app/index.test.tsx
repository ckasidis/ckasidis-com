import { render, screen } from "@testing-library/react";

import Home from "./page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: /A passionate Software and DevOps Engineer based in Singapore/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
