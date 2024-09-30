import { useState, useEffect } from "react";
import axios from "axios";

import { OptionInfo, SortByOptions, AnimalType } from "./Types";

export type AnimalKeyPair = OptionInfo<AnimalType>; // OptionInfo is a generic

export type SortOrder = OptionInfo<SortByOptions>;

export const useAnimalTypes = () => {
  const [animalTypes, setAnimalTypes] = useState<AnimalKeyPair[]>([]);
  const [sortOptions, setSortOptions] = useState<SortOrder[]>([]);

  useEffect(() => {
    const getApiStructure = async () => {
      const typeData = await axios.get<AnimalKeyPair[]>("/animal-types");
      setAnimalTypes(typeData.data);

      const { data } = await axios.get<SortOrder[]>("/animal-sort-options");
      setSortOptions(data);
    };

    getApiStructure();
  }, []);

  return [animalTypes, sortOptions];
};
