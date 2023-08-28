import React from "react";
import Infos from "./Infos";
import FilterTabs from "./FilterTabs";

const Job = ({ job }) => {
  return job.featured ? (
    <article
      className="block bg-white md:flex md:justify-between md:items-center 
    border-l-4 border-primary shadow-lg rounded-lg py-7 px-5 my-10"
    >
      <Infos job={job} />
      <FilterTabs job={job} />
    </article>
  ) : (
    <article
      className="block bg-white md:flex md:justify-between md:items-center 
    shadow-lg rounded-lg py-7 px-5 my-10"
    >
      <Infos job={job} />
      <FilterTabs job={job} />
    </article>
  );
};

export default Job;
