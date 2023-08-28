import React from "react";

const FilterTabs = ({ job }) => {
  return (
    <div>
      <h3>{`${job.role} ${job.level} ${job.languages} ${job.tools}`}</h3>
    </div>
  );
};

export default FilterTabs;
