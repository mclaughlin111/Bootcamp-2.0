import axios from "axios";
import { useEffect, useState } from "react";
import { Animal } from "./Animal";

export const useAnimals = (
  searchText: string,
  searchType: string,
  orderType: string
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const getAnimals = async () => {
      // Create the params object conditionally
      const params: { name?: string; type?: string; order?: string } = {};
      if (searchText) {
        params.name = searchText;
      }
      if (searchType) {
        params.type = searchType;
      }
      if (orderType) {
        params.order = orderType;
      }

      setIsLoading(true);
      const { data } = await axios.get<Animal[]>(`/animals`, {
        params,
      });

      setAnimals(data);
      setIsLoading(false);
    };
    getAnimals();
  }, [searchText, searchType, orderType]);

  return { isLoading, animals };
};
