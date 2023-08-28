import React from "react";
import Infos from "./Infos";
import FilterTabs from "./FilterTabs";

const Job = ({ job }) => {
  return (
    <article className="flex justify-between items-center">
      <Infos job={job} />
      <FilterTabs job={job} />
    </article>
  );
};

export default Job;
