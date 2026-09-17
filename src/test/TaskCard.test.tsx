import TaskCard from "../components/TaskCard";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("TaskCard", () => {
    it("shows correct information", () => {
    render(
      <TaskCard
        id={1212}
        title="Test TaskCard"
        description="This is a test description."
        assignee="Test tester"
        category="Testing"
        priority="High"
      />
    );
    expect(screen.getByText("Task ID: 1212")).toBeInTheDocument();
    expect(screen.getByText("Test TaskCard")).toBeInTheDocument();
    expect(screen.getByText("This is a test description.")).toBeInTheDocument();
    expect(screen.getByText("Assignee: Test tester")).toBeInTheDocument();
    expect(screen.getByText("Category: Testing")).toBeInTheDocument();
    expect(screen.getByText("Priority: High")).toBeInTheDocument();
    
  });





});