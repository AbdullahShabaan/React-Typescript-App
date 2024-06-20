export type Animal = "bird" | "cat" | "dog" | "rabbit" | "reptile";
export default interface PetType {
  id: number;
  name: string;
  city: string;
  animal: Animal;
  state: string;
  description: string;
  images: string[];
  breed: string;
}
export interface PetApiResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: PetType[];
}
export interface SearchParamsType {
  location: string;
  animal: Animal;
  breed: string;
}

export interface BreedApiResponse {
  animal: Animal;
  breeds: string[];
}
