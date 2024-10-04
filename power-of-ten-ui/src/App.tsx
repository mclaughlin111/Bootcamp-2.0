import { useReducer, useState } from "react";
import { Filters } from "./components/Filters";
import { Table } from "./components/table/Table";
import { useTimes } from "./hooks/useTimes";
import { SortField, SortOrder, SortOptions } from "./types/SortOptions";
import { CompactToggle } from "./components/CompactToggle";
import "./index.css";

export const App = () => {
  const genders = ["Male", "Female"];
  const timeOptions = ["Marathon", "Half Marathon", "10km"];

  type Action =
    | { type: "gender"; gender: string }
    | { type: "distance"; distance: string }
    | { type: "page"; page: number }
    | { type: "limit"; limit: number }
    | { type: "sortField"; sortField: SortField }
    | { type: "sortOrder"; sortOrder: SortOrder }
    | { type: "option"; sortOption: SortOptions }
    | { type: "RESET" }; // reset action Optional

  type ApiCallParams = {
    gender: string;
    distance: string;
    page: number;
    limit: number;
    sortOptions?: {
      sortField: SortField;
      sortOrder: SortOrder;
    };
  };

  // Correct initial state structure
  const initialApiCallParams: ApiCallParams = {
    gender: "male",
    distance: "marathon",
    page: 0,
    limit: 10,
    sortOptions: {
      sortField: "rank",
      sortOrder: "asc",
    },
  };

  // REDUCER
  const [state, dispatch] = useReducer(reducer, initialApiCallParams);

  function reducer(state: ApiCallParams, action: Action): ApiCallParams {
    switch (action.type) {
      case "gender":
        return { ...state, gender: action.gender };
      case "distance":
        return { ...state, distance: action.distance };
      case "page":
        return { ...state, page: action.page };
      case "limit":
        return { ...state, limit: action.limit };
      case "option":
        return { ...state, sortOptions: action.option };
      case "sortField":
        return {
          ...state,
          sortOptions: { ...state.sortOptions, sortField: action.sortField },
        };
      case "sortOrder":
        return {
          ...state,
          sortOptions: { ...state.sortOptions, sortOrder: action.sortOrder },
        };
      case "RESET":
        return initialApiCallParams;
      default:
        return state;
    }
  }
  const handleSortOrderChange = (selectedSortOrder: SortOrder) => {
    dispatch({ type: "sortOrder", sortOrder: selectedSortOrder });
  };

  const handleSortFieldChange = (selectedSortField: SortField) => {
    dispatch({ type: "sortField", sortField: selectedSortField });
  };

  const handleGenderChange = (selectedGender: string) => {
    dispatch({ type: "gender", gender: selectedGender });
  };

  const handleDistanceChange = (selectedDistance: string) => {
    dispatch({ type: "distance", distance: selectedDistance });
  };

  const handlePageChange = (selectedPage: number) => {
    dispatch({ type: "page", page: selectedPage });
  };

  const handleLimitChange = (selectedLimit: number) => {
    dispatch({ type: "limit", limit: selectedLimit });
  };

  const handleSortOptionChange = (selectedOption: SortOptions) => {
    dispatch({ type: "option", option: selectedOption });
  };

  // API Call
  const { timesResponse } = useTimes(
    state.gender,
    state.distance,
    state.page * state.limit,
    state.limit,
    state.sortOptions.sortOrder,
    state.sortOptions.sortField
  );
  console.log(state);

  //Table Compact Toggle
  const [tableSize, setTableSize] = useState<"medium" | "small">("medium");

  const handleTableSizeChange = () => {
    setTableSize((prevSize) => (prevSize === "medium" ? "small" : "medium"));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Filters
            label={"Gender"}
            options={genders}
            setFilter={handleGenderChange}
          />
          <Filters
            label={"Times"}
            options={timeOptions}
            setFilter={handleDistanceChange}
          />
        </div>

        <div>
          {" "}
          <CompactToggle
            tableSize={tableSize}
            handleTableSizeChange={handleTableSizeChange}
          />
        </div>
      </div>

      <Table
        times={timesResponse}
        page={state.page}
        setPage={handlePageChange}
        limit={state.limit}
        setLimit={handleLimitChange}
        sortOrder={state.sortOptions.sortOrder}
        setSortOrder={handleSortOrderChange}
        sortField={state.sortOptions.sortField}
        setSortField={handleSortFieldChange}
        tableSize={tableSize}
        setSortOption={handleSortOptionChange}
      />
    </>
  );
};
