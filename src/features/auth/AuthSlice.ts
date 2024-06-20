import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "SearchPetsParams",
  initialState: {
    value: {
      email: "",
      password: "",
    },
  },
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.value = action.payload;
    },
  },
});

export const searchAllPets = slice.actions.login;
export default slice.reducer;
