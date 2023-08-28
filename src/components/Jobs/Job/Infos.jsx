import React from "react";

const Infos = ({ job }) => {
  return (
    <div className="block mb-4 md:flex md:items-center md:mb-0 md:mr-10">
      <div className="relative w-10 bottom-12 md:static md:w-16 md:mr-4">
        <img className="w-full" src={job.logo} alt={job.company} />
      </div>
      <div className="-mt-10 border-b-2 md:mt-0 md:border-none">
        <h3>
          <span className="text-primary mr-6">{job.company}</span>
          {job.new && (
            <span className="text-white bg-primary rounded-xl p-1.5 pt-2 px-3 mr-4 align-middle">
              NEW!
            </span>
          )}
          {job.featured && (
            <span className="text-white bg-neutral-very-dark rounded-xl p-1.5 pt-2 px-3 align-middle">
              FEATURED
            </span>
          )}
        </h3>
        <h3 className="font-bold my-3">{job.position}</h3>
        <p className="text-neutral-dark mb-2">{`${job.postedAt} • ${job.contract} • ${job.location}`}</p>
      </div>
    </div>
  );
};

export default Infos;
