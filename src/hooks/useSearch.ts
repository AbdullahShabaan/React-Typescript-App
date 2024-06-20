import { QueryFunction, useQuery } from "@tanstack/react-query";
import { PetApiResponse, SearchParamsType } from "../types/Common";

const fetchPets: QueryFunction<
  PetApiResponse,
  ["pet", SearchParamsType]
> = async ({ queryKey }) => {
  const [, { animal, location, breed }] = queryKey;
  const req = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  return req.json();
};
const useSearch = (searchParams: SearchParamsType) => {
  return useQuery({
    queryKey: ["pet", searchParams],
    queryFn: fetchPets,
  });
};

export default useSearch;
