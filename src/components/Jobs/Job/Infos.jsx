import React from "react";

const Infos = ({ job }) => {
  return (
    <div className="flex">
      <div>
        <img src={job.logo} alt={job.company} />
      </div>
      <div>
        <h3>{`${job.company} ${job.new ? "NEW!" : ""} ${
          job.featured ? "FEATURED" : ""
        }`}</h3>
        <h3>{job.position}</h3>
        <p>{`${job.postedAt} ${job.contract} ${job.location}`}</p>
      </div>
    </div>
  );
};

export default Infos;
