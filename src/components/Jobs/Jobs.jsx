import React from "react";
import Job from "./Job/Job";
import { useQuery } from "react-query";
import { fetchData } from "../../utility";

const Jobs = () => {
  // Use the useQuery hook to execute the query
  const url = "src/data.json";
  const { data, isLoading, error } = useQuery("jobs", () => fetchData(url));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="w-10/12 m-auto">
      {data?.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
    </section>
  );
};

export default Jobs;
