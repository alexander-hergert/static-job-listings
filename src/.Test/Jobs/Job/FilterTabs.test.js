import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterTabs from "../../../components/Jobs/Job/FilterTabs";

// Mock the useGlobalContext hook
jest.mock("../../../context", () => ({
  useGlobalContext: jest.fn(),
}));

// Mock the context values
const mockContext = {
  filters: [],
  setFilters: jest.fn(),
};

// Use the mocked context values in the test
require("../../../context").useGlobalContext.mockReturnValue(mockContext);

test("should render the component", () => {
  const job = {
    role: "Frontend",
    level: "Senior",
    languages: ["JavaScript", "HTML", "CSS"],
    tools: [],
  };

  const { getByText } = render(<FilterTabs job={job} />);

  // Check if the component renders with the provided job data
  expect(getByText("Frontend")).toBeInTheDocument();
  expect(getByText("Senior")).toBeInTheDocument();
  expect(getByText("JavaScript")).toBeInTheDocument();
  expect(getByText("HTML")).toBeInTheDocument();
  expect(getByText("CSS")).toBeInTheDocument();
});

test("should call setFilters when a filter button is clicked", () => {
  const job = {
    role: "Frontend",
    level: "Senior",
    languages: ["JavaScript", "HTML", "CSS"],
    tools: [],
  };

  const { getByText } = render(<FilterTabs job={job} />);

  // Click on a filter button
  fireEvent.click(getByText("Frontend"));

  // Check if setFilters was called with the correct arguments
  expect(mockContext.setFilters).toHaveBeenCalledWith(["Frontend"]);
});
