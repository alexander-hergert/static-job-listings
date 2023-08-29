import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Filters from "../../components/Filters/Filters";

// Mock the useGlobalContext hook
jest.mock("../../context", () => ({
  useGlobalContext: jest.fn(),
}));

test("should render with filters", () => {
  // Mock the context values with some filters
  const mockContext = {
    filters: ["Filter1", "Filter2"],
    setFilters: jest.fn(),
  };

  // Use the mocked context values in the test
  require("../../context").useGlobalContext.mockReturnValue(mockContext);

  const { getByText } = render(<Filters />);

  // Check if the component renders with the provided filters
  expect(getByText("Filter1")).toBeInTheDocument();
  expect(getByText("Filter2")).toBeInTheDocument();
});

test("should call setFilters with an empty array when 'Clear' is clicked", () => {
  // Mock the context values with some filters
  const mockContext = {
    filters: ["Filter1", "Filter2"],
    setFilters: jest.fn(),
  };

  // Use the mocked context values in the test
  require("../../context").useGlobalContext.mockReturnValue(mockContext);

  const { getByText } = render(<Filters />);

  // Click on the 'Clear' link
  fireEvent.click(getByText("Clear"));

  // Check if setFilters was called with an empty array
  expect(mockContext.setFilters).toHaveBeenCalledWith([]);
});
