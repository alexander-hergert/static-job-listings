import React from "react";
import Job from "./Job/Job";
import { useQuery } from "react-query";
import { fetchData } from "../../utility";
import { useGlobalContext } from "../../context";

const Jobs = () => {
  const { filters } = useGlobalContext();
  //Use the useQuery hook to execute the query
  const url = "src/data.json";
  const { data, isLoading, error } = useQuery("jobs", () => fetchData(url));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredJobs = data?.filter((item) => {
    const { role, level, languages, tools } = item;
    //compare filters array with new constructed
    //new constructed has item.role, item.level, languages, tools in it
    const compareArray = [role, level, ...languages, ...tools];
    let counter = 0;
    for (const filter of filters) {
      for (const compareItem of compareArray) {
        if (filter === compareItem) {
          counter++;
        }
      }
    }
    if (counter === filters.length) {
      //returns only the item which have all filter items in it
      return item;
    }
  });

  return filters.length < 1 ? (
    <section className="w-10/12 m-auto">
      {data?.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
    </section>
  ) : (
    <section className="w-10/12 m-auto">
      {filteredJobs?.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
    </section>
  );
};

export default Jobs;
