import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Dispatch, SetStateAction } from "react";

type FiltersProps = {
  label: string;
  options: string[];
  setFilter: (value: string) => void;
};

export const Filters = ({ label, options, setFilter }: FiltersProps) => {
  const handleChange = (event: any) => {
    setFilter(event.target.value); // Get the value of the selected radio button
  };

  const initial = options[0].toLowerCase();

  return (
    <FormControl>
      <FormLabel id="gender-radio-radio-buttons">{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="gender-radio"
        name="gender-radio-buttons-group"
        defaultChecked
        defaultValue={initial}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.toLowerCase().replace(/ /g, "-")}
            // sets value to LOWER CASE, and adds - for distance call
            control={<Radio />}
            label={option}
            onChange={handleChange}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
