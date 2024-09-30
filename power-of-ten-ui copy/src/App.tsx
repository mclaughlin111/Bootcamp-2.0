import { useReducer, useState } from "react";
import { Filters } from "./components/Filters";
import { Table } from "./components/table/Table";
import { useTimes } from "./hooks/useTimes";
import { SortField, SortOrder } from "./types/SortOptions";
import { CompactToggle } from "./components/CompactToggle";

export const App = () => {
  const genders = ["Male", "Female"];
  const timeOptions = ["Marathon", "Half Marathon", "10km"];

  const apiStateCallParams = {
    gender: "male",
    distance: "marathon",
    page: 0,
    limit: 10,
    sortOrder: "asc" || "desc",
    sortField: "rank",
  };

  // REDUCER
  const [state, dispatch] = useReducer(reducer, apiStateCallParams);

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "gender":
        return { ...state, gender: action.payload };
      // CLARIFY ABOVE LINE re ...state, type: action.payload
      case "distance":
        return { ...state, distance: action.payload };
      case "page":
        return { ...state, page: action.payload };
      case "limit":
        return { ...state, limit: action.payload };
      case "sortOrder":
        return { ...state, sortOrder: action.payload };
      case "sortField":
        return { ...state, sortField: action.payload };
      //
      case "RESET":
        return apiStateCallParams;
      default:
        return apiStateCallParams;
    }
  }

  const handleSortOrderChange = (selectedSortOrder: SortOrder) => {
    dispatch({ type: "sortOrder", payload: selectedSortOrder });
  };

  const handleSortFieldChange = (selectedSortField: SortField) => {
    dispatch({ type: "sortField", payload: selectedSortField });
  };

  const handleGenderChange = (selectedGender: string) => {
    dispatch({ type: "gender", payload: selectedGender });
  };

  const handleDistanceChange = (selectedDistance: string) => {
    dispatch({ type: "distance", payload: selectedDistance });
  };

  const handlePageChange = (selectedPage: number) => {
    dispatch({ type: "page", payload: selectedPage });
  };

  const handleLimitChange = (selectedLimit: number) => {
    dispatch({ type: "limit", payload: selectedLimit });
  };

  // API Call
  const { timesResponse } = useTimes(
    state.gender,
    state.distance,
    state.page * state.limit,
    state.limit,
    state.sortOrder,
    state.sortField
  );

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
        sortOrder={state.SortOrder}
        setSortOrder={handleSortOrderChange}
        sortField={state.SortField}
        setSortField={handleSortFieldChange}
        tableSize={tableSize}
      />
    </>
  );
};
