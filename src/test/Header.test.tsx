import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("Header", () => {
  it("renders without fault", () => {
    render(<Header />);
  });

  it("shows the title", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", { name: "Programming", level: 1 }),
    ).toBeInTheDocument();
  });

  it("shows the task board heading", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", { name: "My Task Board", level: 2 }),
    ).toBeInTheDocument();
  });

  it("shows the short introduction", () => {
    render(<Header />);

    expect(
      screen.getByText("You can plan here and keep track of the team's tasks"),
    ).toBeInTheDocument();
  });
});
