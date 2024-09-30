import { useState } from "react";
import { AnimalSearch } from "./AnimalSearch/AnimalSearch";
import { AnimalTable } from "./AnimalTable";
import { useAnimals } from "./useAnimals";
import { useTypes } from "./useTypes";
import { AnimalType } from "./AnimalType";
import { OrderBy } from "./OrderBy";
import { Button } from "@mui/material";
import {
  Title,
  Subtitle,
  Container,
  AppHeader,
  FilterOrderContainer,
  FilterSection,
  OrderSection,
  Header,
  AnimalTableContainer,
} from "./FarmStyles";

export function AnimalPage() {
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const { animals, isLoading } = useAnimals(searchText, searchType, orderBy);

  const clear = () => {
    setSearchText("");
    setSearchType("");
    setOrderBy("");
  };

  return (
    <Container>
      <AppHeader>
        <Header>
          <Title>Tom's Farm 🚜</Title>
        </Header>
        <FilterOrderContainer>
          <FilterSection>
            <Subtitle>Filters</Subtitle>
            <AnimalSearch
              onSubmitSearch={(value: string) => setSearchText(value)}
              value={searchText}
            />
            <AnimalType
              onSubmitType={setSearchType}
              value={searchType} // Pass the searchType state as value
            />
          </FilterSection>
          <OrderSection>
            <Subtitle>Order</Subtitle>
            <OrderBy onSubmitOrder={setOrderBy} value={orderBy} />
          </OrderSection>
          <div>
            <Button
              color="info"
              size="small"
              variant="contained"
              onClick={clear}
              disableElevation
            >
              CLEAR
            </Button>
          </div>
        </FilterOrderContainer>
        <AnimalTableContainer>
          <AnimalTable animals={animals} />
        </AnimalTableContainer>
      </AppHeader>
    </Container>
  );
}
