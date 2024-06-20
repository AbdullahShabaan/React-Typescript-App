import { QueryFunction, useQuery } from "@tanstack/react-query";
import { PetApiResponse } from "../types/Common";

const fetchPet: QueryFunction<PetApiResponse, ["pet", number]> = async ({
  queryKey,
}) => {
  const [, id] = queryKey;
  const req = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
  return req.json();
};
const usePet = (petId: number) => {
  return useQuery({
    queryKey: ["pet", petId],
    queryFn: fetchPet,
  });
};

export default usePet;
