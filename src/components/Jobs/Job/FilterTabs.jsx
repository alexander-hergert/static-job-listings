import React from "react";

const FilterTabs = ({ job }) => {
  const { role, level, languages, tools } = job;
  return (
    <div className="mt-2 flex flex-wrap">
      <button className="mr-4 mb-2 text-primary p-1 pt-1.5 px-2 bg-neutral-filter-tablets rounded-lg">
        {role}
      </button>
      <button className="mr-4 mb-2 text-primary p-1 pt-1.5 px-2 bg-neutral-filter-tablets rounded-lg">
        {level}
      </button>
      {languages.map((language) => (
        <button
          key={language.id}
          className="mr-4 mb-2 text-primary p-1 pt-1.5 px-2 bg-neutral-filter-tablets rounded-lg"
        >
          {language}
        </button>
      ))}
      {tools.map((tool) => (
        <button
          key={tool.id}
          className="mr-4 mb-2 text-primary p-1 pt-1.5 px-2 bg-neutral-filter-tablets rounded-lg"
        >
          {tool}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
