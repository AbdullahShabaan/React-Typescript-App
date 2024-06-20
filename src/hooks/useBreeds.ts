import { QueryFunction, useQuery } from "@tanstack/react-query";
import { Animal, BreedApiResponse } from "../types/Common";

const fetchBreed: QueryFunction<BreedApiResponse, ["breed", Animal]> = async ({
  queryKey,
}) => {
  const [, animal] = queryKey;
  if (!animal) {
    return [];
  }
  const req = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  return req.json();
};
const BreedList = (animal: Animal) => {
  return useQuery({
    queryKey: ["breed", animal],
    queryFn: fetchBreed,
  });
};

export default BreedList;
