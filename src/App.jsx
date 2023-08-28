import React from "react";
import Filters from "./components/Filters/Filters";
import Jobs from "./components/Jobs/Jobs";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Filters />
        <Jobs />
      </main>
    </QueryClientProvider>
  );
}

export default App;
