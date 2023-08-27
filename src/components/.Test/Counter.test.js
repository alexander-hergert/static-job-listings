import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";

test("it increments the counter when the button is clicked", () => {
  render(<Counter />);

  // Initially, the counter should be 0
  const counterElement = screen.getByText("Counter: 0");
  expect(counterElement).toBeInTheDocument();

  // Click the increment button
  const incrementButton = screen.getByText("Increment");
  fireEvent.click(incrementButton);

  // After clicking, the counter should be 1
  const updatedCounterElement = screen.getByText("Counter: 1");
  expect(updatedCounterElement).toBeInTheDocument();

});
