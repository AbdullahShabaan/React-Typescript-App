import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Animal,
  BreedApiResponse,
  PetApiResponse,
  SearchParamsType,
} from "../types/Common";

export const petApi = createApi({
  reducerPath: "petApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pets-v2.dev-apis.com" }),
  endpoints: (builder) => ({
    getPet: builder.query<PetApiResponse, number>({
      query: (id) => ({ url: "pets", params: { id } }),
    }),
    getBreeds: builder.query<BreedApiResponse, Animal>({
      query: (animal) => ({ url: "breeds", params: { animal } }),
    }),
    petsSearch: builder.query<PetApiResponse, SearchParamsType>({
      query: (searchParams) => ({
        url: "pets",
        params: { ...searchParams },
      }),
    }),
  }),
});

export const { useGetPetQuery, useGetBreedsQuery, usePetsSearchQuery } = petApi;
