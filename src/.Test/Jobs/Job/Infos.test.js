import React from "react";
import { render } from "@testing-library/react";
import { AppProvider } from "../../../context";
import Infos from "../../../components/Jobs/Job/Infos";

test("Infos component renders without crashing", () => {
  const mock = {
    new: true,
    featured: true,
    company: "Photosnap",
  };

  const { getByText } = render(
    <AppProvider>
      <Infos job={mock} />
    </AppProvider>
  );
  // Check that the component renders without errors
  expect(getByText("NEW!")).toBeInTheDocument();
  expect(getByText("FEATURED")).toBeInTheDocument();
  expect(getByText("Photosnap")).toBeInTheDocument();
});
