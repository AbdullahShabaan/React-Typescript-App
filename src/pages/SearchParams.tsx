import { useContext } from "react";
import Results from "../components/Results";
import ErrorBoundary from "../components/ErrorBoundary";
import AdoptPet from "../Contexts/AdoptPet";
import PetType, { Animal, SearchParamsType } from "../types/Common";
import { searchAllPets } from "../features/search-pets/SearchSlice";
import { useAppSelector, useAppDispatch } from "../App/hooks";
import { useGetBreedsQuery, usePetsSearchQuery } from "../services/Pets";

const ANIMAL = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const searchParams = useAppSelector((state) => state.searchSlice.value);
  const breedsQuery = useGetBreedsQuery(searchParams.animal as Animal, {
    skip: !searchParams.animal,
  });
  const dispatch = useAppDispatch();

  const breeds = breedsQuery?.data?.breeds || [];

  const searchQuery = usePetsSearchQuery(searchParams as SearchParamsType);
  const pets = searchQuery?.data?.pets;

  const [contextValue] = useContext(AdoptPet);
  return (
    <div>
      <div className="search-params">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const location = formData.get("location") as string;
            const animal = formData.get("animal") as Animal;
            const breed = formData.get("breed") as string;
            dispatch(
              searchAllPets({
                animal,
                location,
                breed,
              } as SearchParamsType)
            );
          }}
        >
          {contextValue && (
            <div className="pet image-container">
              <img src={contextValue.images[0]} alt={contextValue.name} />
            </div>
          )}

          <label htmlFor="location">
            Location:
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              defaultValue={searchParams.location}
              onChange={() => {}}
            />
          </label>
          <label htmlFor="animal">
            Animal:
            <select
              name="animal"
              id="animal"
              defaultValue={searchParams.animal}
              onChange={(e) => {
                dispatch(
                  searchAllPets({
                    ...searchParams,
                    animal: e.target.value as Animal,
                  })
                );
              }}
            >
              {ANIMAL.map((e) => {
                return (
                  <option key={e} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </label>
          <label htmlFor="breed">
            Breed:
            <select
              name="breed"
              id="breed"
              disabled={!breeds.length}
              defaultValue={searchParams.breed}
              // onChange={() => {
              //   // setBreed(e.target.value);
              //   // setSearchParams({
              //   //   ...searchParams,
              //   //   breed: e.target.value,
              //   // });
              // }}
            >
              {breeds.map((e) => {
                return (
                  <option key={e} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </label>
          <button>Search</button>
        </form>
      </div>
      {searchQuery.isError && (
        <span>{(searchQuery.error as Error).message}</span>
      )}
      {searchQuery.data && (
        <ErrorBoundary>
          <Results pets={pets as PetType[]} />
        </ErrorBoundary>
      )}
    </div>
  );
};

export default SearchParams;
