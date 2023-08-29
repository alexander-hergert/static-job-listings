import React from "react";
import { useGlobalContext } from "../../../context";

const FilterTabs = ({ job }) => {
  const { role, level, languages, tools } = job;
  const { filters, setFilters } = useGlobalContext();

  const handleFilter = (item) => {
    let newFilter;
    //do not allow duplicates
    if (filters.includes(item)) {
      //newFilter = filters.filter((filter) => filter !== item); --toggle
      newFilter = [...filters]; //not toggle
    } else {
      newFilter = [...filters, item];
    }
    setFilters(newFilter);
  };

  return (
    <div className="mt-2 flex flex-wrap">
      <button
        onClick={() => handleFilter(role)}
        className="mr-4 mb-2 text-primary p-1 pt-1.5 px-2 bg-neutral-filter-tablets rounded-lg"
      >
        {role}
      </button>
      <button
        onClick={() => handleFilter(level)}
        className="mr-4 mb-2 text-primary p-1 pt-1.5 px-2 bg-neutral-filter-tablets rounded-lg"
      >
        {level}
      </button>
      {languages.map((language) => (
        <button
          onClick={() => handleFilter(language)}
          key={language}
          className="mr-4 mb-2 text-primary p-1 pt-1.5 px-2 bg-neutral-filter-tablets rounded-lg"
        >
          {language}
        </button>
      ))}
      {tools.map((tool) => (
        <button
          onClick={() => handleFilter(tool)}
          key={tool}
          className="mr-4 mb-2 text-primary p-1 pt-1.5 px-2 bg-neutral-filter-tablets rounded-lg"
        >
          {tool}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
