import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useAnimalTypes } from "./useAnimalTypes";
import { AnimalType as MyAnimalType } from "./Types";

type SelectAnimalType = MyAnimalType | "";

type AnimalTypeProps = {
  onSubmitType: (searchType: SelectAnimalType) => void;
  value: string; // Add this line to accept the value prop
};

export const AnimalType = ({ onSubmitType, value }: AnimalTypeProps) => {
  const [animalTypes] = useAnimalTypes();
  console.log(animalTypes);

  return (
    <>
      <FormControl variant="standard" sx={{ minWidth: 150, marginLeft: "5px" }}>
        <InputLabel>Type</InputLabel>
        <Select
          label={"Animal Type"}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value} // Use the state for the select value
          onChange={(event) => {
            const searchForType = event.target.value as SelectAnimalType;
            onSubmitType(searchForType);
          }}
        >
          <MenuItem value={""}>
            <em>none</em>
          </MenuItem>
          {animalTypes.map((type) => (
            <MenuItem key={type.type} value={type.type}>
              {type.displayName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
