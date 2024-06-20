import "./App.css";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AdoptPet from "./Contexts/AdoptPet";
import { useState } from "react";
import { lazy, Suspense } from "react";
import { LoaderApi } from "./components/Loader";
import PetType from "./types/Common";
import { store } from "./app/store";
import { Provider } from "react-redux";

const Details = lazy(() => import("./pages/Details"));
const SearchParams = lazy(() => import("./pages/SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      // cacheTime: Infinity,
    },
  },
});
function App() {
  const adopted = useState<PetType | null>(null);
  return (
    <HashRouter>
      <Provider store={store}>
        <AdoptPet.Provider value={adopted}>
          <QueryClientProvider client={queryClient}>
            <Suspense
              fallback={
                <div
                  className="loader-container"
                  style={{ textAlign: "center" }}
                >
                  <LoaderApi />
                </div>
              }
            >
              <header>
                <Link to="/">
                  <h1></h1>
                </Link>
              </header>
              <Routes>
                <Route path="/details/:id" element={<Details />}></Route>
                <Route path="/" element={<SearchParams />}></Route>
                <Route path="*" element={<h1>Not Found!</h1>}></Route>
              </Routes>
              <ReactQueryDevtools initialIsOpen={false} />
            </Suspense>
          </QueryClientProvider>
        </AdoptPet.Provider>
      </Provider>
    </HashRouter>
  );
}

export default App;
