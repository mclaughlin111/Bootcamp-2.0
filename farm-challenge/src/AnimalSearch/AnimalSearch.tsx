import { TextField } from "@mui/material";
import { useState, useEffect } from "react";

type AnimalSearchProps = {
  onSubmitSearch: (searchText: string) => void;
  value: string;
};

export const AnimalSearch = ({ onSubmitSearch, value }: AnimalSearchProps) => {
  const [search, setSearch] = useState(value);

  useEffect(() => {
    setSearch(value);
  }, [value]);

  // Unused function handleSearchChange
  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(event.target.value);
  //   onSubmitSearch(event.target.value);
  // };

  return (
    <>
      <TextField
        id="standard-basic"
        label="Name"
        value={search}
        variant="standard"
        onChange={(event) => {
          const searchText = event.target.value;
          onSubmitSearch(searchText);
        }}
      />
    </>
  );
};
