import React from "react";
import Filters from "./components/Filters/Filters";
import Jobs from "./components/Jobs/Jobs";

function App() {
  return (
    <main>
      <h1 className="w-full bg-primary">static-job-listings</h1>
      <Filters />
      <Jobs />
    </main>
  );
}

export default App;
