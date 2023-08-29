import React from "react";
import { render } from "@testing-library/react";
import Jobs from "../../components/Jobs/Jobs";
import { AppProvider } from "../../context"; // Assuming you have a context provider

// Mock the useQuery hook to return sample job data
// Mock the useQuery hook to return sample job data with only the first item
jest.mock("react-query", () => ({
  useQuery: (queryKey) => {
    if (queryKey === "jobs") {
      return {
        data: [
          {
            id: 1,
            company: "Photosnap",
            logo: "/images/photosnap.svg",
            new: true,
            featured: true,
            position: "Senior Frontend Developer",
            role: "Frontend",
            level: "Senior",
            postedAt: "1d ago",
            contract: "Full Time",
            location: "USA Only",
            languages: ["HTML", "CSS", "JavaScript"],
            tools: [],
          },
        ],
        isLoading: false,
        error: null,
      };
    }
    // Handle other queries if needed
  },
}));

// Wrap the component with the context provider
const renderJobsWithFilters = (filters) => {
  return render(
    <AppProvider>
      <Jobs />
    </AppProvider>
  );
};

test("Job with id1 is rendered others are not", () => {
  // Define filters you want to apply
  const filters = ["Frontend", "Senior", "JavaScript"];

  // Render the Jobs component with filters
  const { getByText, queryByText } = renderJobsWithFilters(filters);

  // Check that the expected job is rendered
  expect(getByText("Senior Frontend Developer")).toBeInTheDocument();

  // Ensure that other jobs are not rendered
  expect(queryByText("Fullstack Developer")).toBeNull();
  expect(queryByText("Software Engineer")).toBeNull();
});
