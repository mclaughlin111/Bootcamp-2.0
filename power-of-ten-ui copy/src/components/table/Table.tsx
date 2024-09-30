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
}) => {
  const runnersTimesData = times.times;
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // DUNCAN: do I need this "duplicate" set of state here to store the 2 sort fields being held?
  const [order, setOrder] = useState<SortOrder>("asc");
  const [currentSortField, setCurrentSortField] = useState<SortField>("rank");

  const handlePageChange = (
    e: React.MouseEvent<HTMLButtonElement> | null,
    newPageNumber: number
  ) => {
    setPage(newPageNumber);
  };

  const handleRowsChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setLimit(parseInt(event.target.value));
    setPage(0);
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
                    key={heading.id}
                    active={currentSortField === heading.id}
                    direction={order}
                    onClick={() => {
                      handleSortChange({
                        sortField,
                        sortOption: heading.id as SortField, // casting the id to SortField
                        order,
                        setSortField,
                        setSortOrder,
                        setCurrentSortField,
                        setOrder,
                      });
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
