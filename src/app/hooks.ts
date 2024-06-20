import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../App/store";
import { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
