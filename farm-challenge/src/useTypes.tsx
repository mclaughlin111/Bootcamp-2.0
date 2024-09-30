import axios from "axios";
import { useEffect, useState } from "react";

export const useTypes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const getTypes = async () => {
      setIsLoading(true);
      const { data } = await axios.get(`/animal-types`);
      setTypes(data);
      setIsLoading(false);
      console.log(types);
    };
    getTypes();
  }, []);

  return { types, isLoading };
};
