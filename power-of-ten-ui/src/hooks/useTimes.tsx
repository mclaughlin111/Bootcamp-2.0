import { useEffect, useState } from "react";
import axios from "axios";
import { Response } from "../types/Response";
import { SortField, SortOrder } from "../types/SortOptions";

export const useTimes = (
  gender: string,
  distance: string,
  page: number,
  limit: number,
  sortOrder: SortOrder,
  sortField: SortField
) => {
  const [timesResponse, setTimesResponse] = useState<Response>({
    times: [],
    totalTimesCount: 0,
  });

  const axiosInstance = axios.create({
    baseURL: "http://localhost:4000",
  });

  const getTimes = async () => {
    try {
      const response = await axiosInstance.get<Response>(
        `/times/${gender}/${distance}?skip=${page}&sortField=${sortField}&limit=${limit}&sortOrder=${sortOrder}`
      );

      setTimesResponse(response.data);
    } catch (error) {
      console.log("Error on API Call", error);
    }
  };

  useEffect(() => {
    getTimes();
  }, [gender, distance, page, limit, sortField, sortOrder]); // hook "watches" on

  return { timesResponse };
};
