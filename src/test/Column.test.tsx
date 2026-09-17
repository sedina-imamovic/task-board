import Column from "../components/Column";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("Column", () => {
  it("shows title and content", () => {
    render(
      <Column title="Todo">
        <p>My test content</p>
      </Column>,
    );
    expect(screen.getByText("Todo")).toBeInTheDocument();
    expect(screen.getByText("My test content")).toBeInTheDocument();
  });
});
