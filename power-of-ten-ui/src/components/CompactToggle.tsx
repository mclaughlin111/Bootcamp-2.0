import { Switch, FormControlLabel } from "@mui/material";

export const CompactToggle = ({
  tableSize,
  handleTableSizeChange,
}: {
  tableSize: "medium" | "small";
  handleTableSizeChange: () => void;
}) => {
  return (
    <FormControlLabel
      control={
        <Switch
          size="small"
          checked={tableSize === "small"}
          onChange={handleTableSizeChange}
          inputProps={{ "aria-label": "dense" }}
        />
      }
      label="Compact"
    />
  );
};
