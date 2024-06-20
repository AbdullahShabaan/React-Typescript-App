import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Animal, SearchParamsType } from "../../types/Common";

const slice = createSlice({
  name: "SearchPetsParams",
  initialState: {
    value: {
      location: "",
      animal: "" as Animal,
      breed: "",
    } as SearchParamsType,
  },
  reducers: {
    searchAllPets: (state, action: PayloadAction<SearchParamsType>) => {
      state.value = action.payload;
    },
  },
});

export const searchAllPets = slice.actions.searchAllPets;
export default slice.reducer;
