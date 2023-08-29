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
      <section className="flex justify-between bg-white w-10/12 m-auto relative bottom-10 rounded-lg items-center p-5">
        <div className="flex flex-wrap">
          {filters.map((item) => (
            <Filter key={item} item={item} />
          ))}
        </div>
        <div>
          <p className="text-neutral-dark" onClick={handleClick}>
            Clear
          </p>
        </div>
      </section>
    )
  );
};

export default Filters;
