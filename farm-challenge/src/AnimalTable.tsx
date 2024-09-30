import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Animal } from "./Animal";
import { AnimalImage } from "./FarmStyles";

type AnimalsTableProps = {
  animals: Animal[];
};

export const AnimalTable = ({ animals }: AnimalsTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Worth</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>isAlive</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {animals.map((animal) => {
            const { id, name, age, worth, gender, animalType, isAlive } =
              animal;
            return (
              <TableRow key={id}>
                <TableCell>
                  <AnimalImage
                    className="animalImage"
                    alt={`${animalType}`}
                    src={`/animals/${animalType}.png`}
                  ></AnimalImage>
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{age}</TableCell>
                <TableCell>£{worth}</TableCell>
                <TableCell>{gender === "male" ? "♂ M" : "♀ F"}</TableCell>
                <TableCell>{animalType}</TableCell>
                <TableCell>{isAlive ? "❤️" : "💀"}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
