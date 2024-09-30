import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useState, useEffect } from "react";

type OrderByProps = {
  onSubmitOrder: (orderType: string) => void;
  value: string;
};

export const OrderBy = ({ onSubmitOrder, value }: OrderByProps) => {
  const [order, setOrder] = useState(value);

  useEffect(() => {
    setOrder(value);
  }, [value]);

  return (
    <>
      <FormControl variant="standard" sx={{ minWidth: 150, marginLeft: "5px" }}>
        <InputLabel>Order By</InputLabel>
        <Select
          label={"Order by"}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={(event) => {
            const searchByOrder = event.target.value as string;
            console.log(searchByOrder);

            onSubmitOrder(searchByOrder);
          }}
        >
          <MenuItem value={""}>
            <em>none</em>
          </MenuItem>
          <MenuItem value={"age"}>Age</MenuItem>
          <MenuItem value={"name"}>Name</MenuItem>
          <MenuItem value={"worth"}>Worth</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
