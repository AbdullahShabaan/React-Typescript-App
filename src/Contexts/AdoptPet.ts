import { createContext, Dispatch, SetStateAction } from "react";
import common from "../types/Common";

const AdoptPet = createContext<
  [common | null, Dispatch<SetStateAction<common | null>>]
>([null, () => null]);

export default AdoptPet;
