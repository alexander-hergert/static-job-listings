import React from "react";
import Filter from "./Filter";
import { useGlobalContext } from "../../context";

const Filters = () => {
  const { filters, setFilters } = useGlobalContext();

  const handleClick = () => {
    setFilters([]);
  };

  return (
    filters.length > 0 && (
      <section
        className="flex justify-between shadow-lg bg-white w-10/12 
      m-auto relative bottom-6 rounded-lg items-center px-5 pt-6 pb-2 md:w-8/12"
      >
        <div className="flex flex-wrap">
          {filters.map((item) => (
            <Filter key={item} item={item} />
          ))}
        </div>
        <div>
          <p
            className="text-neutral-dark hover:cursor-pointer
           hover:text-primary hover:underline"
            onClick={handleClick}
          >
            Clear
          </p>
        </div>
      </section>
    )
  );
};

export default Filters;
