import { useState } from "react";
import {
  TableContainer,
  Paper,
  Table as MUITable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TableSortLabel,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { Time } from "../../types/Time";
import { Response } from "../../types/Response";
import { SortOrder, SortField, SortOptions } from "../../types/SortOptions";

import { tableHeadings } from "./TableHeadings";
import { handleSortChange } from "./functions/handleSortChange";
import { secondsConverter } from "./functions/secondsConverter";
import "./table.css";

export const Table = ({
  times,
  page,
  setPage,
  limit,
  setLimit,
  sortOrder,
  setSortOrder,
  sortField,
  setSortField,
  tableSize,
  setSortOption,
}: {
  times: Response;
  page: number;
  setPage: (newPage: number) => void;
  limit: number;
  setLimit: (newLimit: number) => void;
  sortOrder: SortOrder;
  setSortOrder: (newSortOrder: SortOrder) => void;
  sortField: SortField;
  setSortField: (newSortField: SortField) => void;
  tableSize: "medium" | "small";
  setSortOption: (newSortOption: SortOptions) => void;
}) => {
  const runnersTimesData = times.times;

  // DUNCAN: do I need this "duplicate" set of state here to store the 2 sort fields being held? ANSWER: no, you didn't need this duplicate set of state, origin is held in reducer.
  // const [order, setOrder] = useState<SortOrder>("asc");
  // const [currentSortField, setCurrentSortField] = useState<SortField>("rank");

  const handlePageChange = (
    e: React.MouseEvent<HTMLButtonElement> | null,
    newPageNumber: number
  ) => {
    setPage(newPageNumber);
  };

  const handleRowsChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLimit(parseInt(event.target.value));
    // setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const handleSortLabelClick = (heading: SortField) => {
    setPage(0);
    setLimit(10);
    console.log(heading);

    //set field
    setSortField(heading.id);

    //toggle order between tri state
    if (sortOrder === "asc") {
      setSortOrder("desc");
    } else if (sortOrder === "desc") {
      setSortOption(undefined);
    } else if (sortOrder === undefined) {
      setSortOrder("asc");
      setSortField("rank");
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <MUITable sx={{ minWidth: 650 }} aria-label="table" size={tableSize}>
          <TableHead>
            <TableRow selected>
              {tableHeadings.map((heading) => (
                <TableCell key={heading.id}>
                  {heading.label}
                  <TableSortLabel
                    active={sortField === heading.id}
                    direction={sortOrder}
                    // hideSortIcon={sortOrder} // when not in api call
                    key={heading.id}
                    onClick={() => {
                      handleSortLabelClick(heading.id);
                    }}
                  ></TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {runnersTimesData.map((time: Time, index: number) => {
              const {
                rank,
                chipTime,
                gunTime,
                pbTime,
                isPB,
                name,
                club,
                coach,
                venue,
                date,
              } = time;

              const dateString = new Date(date).toDateString();

              return (
                <TableRow key={index}>
                  <TableCell>{rank}</TableCell>
                  <TableCell>{secondsConverter(chipTime)}</TableCell>
                  <TableCell>{secondsConverter(gunTime)}</TableCell>
                  <TableCell>{secondsConverter(pbTime)}</TableCell>
                  <TableCell>
                    {isPB ? (
                      <>
                        <span className="pb">PB</span>
                      </>
                    ) : (
                      " "
                    )}
                  </TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{coach}</TableCell>
                  <TableCell>{club}</TableCell>
                  <TableCell>{venue}</TableCell>
                  <TableCell>{dateString}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </MUITable>
        <TablePagination
          count={times.totalTimesCount}
          page={page}
          onPageChange={handlePageChange}
          //
          rowsPerPage={limit}
          //
          rowsPerPageOptions={[10, 25, 50]}
          // { label: "All", value: -1 }
          onRowsPerPageChange={handleRowsChange}
        />
      </TableContainer>
    </>
  );
};
