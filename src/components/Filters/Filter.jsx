import React, { useRef } from "react";
import { useGlobalContext } from "../../context";

const Filter = ({ item }) => {
  const { filters, setFilters } = useGlobalContext();
  const filter = useRef();

  const handleClick = () => {
    const filterTherm = filter.current.textContent;
    const newFilter = filters.filter((item) => item !== filterTherm);
    setFilters(newFilter);
  };

  return (
    <div className="flex mr-4 mb-4">
      <h3
        ref={filter}
        className="bg-neutral-filter-tablets text-primary p-1.5 pb-1 
        rounded-l-md"
      >
        {item}
      </h3>
      <button
        onClick={handleClick}
        className="bg-primary text-white p-1.5 px-2 pb-1 
        rounded-r-md hover:bg-neutral-very-dark"
      >
        <img src="images/icon-remove.svg" alt={`icon-remove-${item}`} />
      </button>
    </div>
  );
};

export default Filter;
