import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Filter from "../../components/Filters/Filter";

// Mock the useGlobalContext hook
jest.mock("../../context", () => ({
  useGlobalContext: jest.fn(),
}));

test("should render a filter", () => {
  // Mock the context values
  const mockContext = {
    filters: [],
    setFilters: jest.fn(),
  };

  // Use the mocked context values in the test
  require("../../context").useGlobalContext.mockReturnValue(mockContext);

  const { getByText } = render(<Filter item="Filter1" />);

  // Check if the filter item is rendered
  expect(getByText("Filter1")).toBeInTheDocument();
});

test("should call setFilters when 'X' button is clicked", () => {
  // Mock the context values
  const mockContext = {
    filters: ["Filter1", "Filter2"],
    setFilters: jest.fn(),
  };

  // Use the mocked context values in the test
  require("../../context").useGlobalContext.mockReturnValue(mockContext);

  render(<Filter item="Filter1" />);

  // Click on the 'X' button
  fireEvent.click(screen.getByText("X"));

  // Check if setFilters was called with the updated filters
  expect(mockContext.setFilters).toHaveBeenCalledWith(["Filter2"]);
});

test("should remove the filter from the DOM when 'X' button is clicked", () => {
  // Mock the context values
  const mockContext = {
    filters: ["Filter1"],
    setFilters: jest.fn(),
  };

  // Use the mocked context values in the test
  require("../../context").useGlobalContext.mockReturnValue(mockContext);

  render(<Filter item="Filter1" />);

  // Click on the 'X' button
  const xButton = screen.getByText("X");
  fireEvent.click(xButton);

  // Use waitFor to wait for the element to be removed from the DOM
  waitFor(() => {
    expect(screen.queryByText("Filter1")).toBeNull(); // Use toBeNull() to check for absence
  });
});
