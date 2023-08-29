import React from "react";
import { render } from "@testing-library/react";
import Job from "../../../components/Jobs/Job/Job";
import { AppProvider } from "../../../context";

// Mock data for a featured job
const featuredJob = {
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
};

// Mock data for a different featured job
const anotherFeaturedJob = {
  id: 2,
  company: "Manage",
  logo: "/images/manage.svg",
  new: true,
  featured: true,
  position: "Fullstack Developer",
  role: "Fullstack",
  level: "Midweight",
  postedAt: "1d ago",
  contract: "Part Time",
  location: "Remote",
  languages: ["Python"],
  tools: ["React"],
};

test("Job component renders job details", () => {
  const { getByText } = render(
    <AppProvider>
      <Job job={featuredJob} />
    </AppProvider>
  );
  expect(getByText("Photosnap")).toBeInTheDocument();
  expect(getByText("Senior Frontend Developer")).toBeInTheDocument();
});

test("Job component renders another featured job correctly", () => {
  const { getByText } = render(
    <AppProvider>
      <Job job={anotherFeaturedJob} />
    </AppProvider>
  );
  expect(getByText("Manage")).toBeInTheDocument();
  expect(getByText("Fullstack Developer")).toBeInTheDocument();
});
