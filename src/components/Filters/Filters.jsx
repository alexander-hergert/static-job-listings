import React from "react";
import Filter from "./Filter";
import { useGlobalContext } from "../../context";

const Filters = () => {
  const { filter } = useGlobalContext();
  return (
    <section>
      {filter.map((item) => (
        <Filter key={item.id} {...item}/>
      ))}
    </section>
  );
};

export default Filters;
