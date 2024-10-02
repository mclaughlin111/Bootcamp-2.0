import { SortField, SortOrder } from "../../../types/SortOptions";

export const handleSortChange = ({
  order,
  setOrder,
  headingId,
  setCurrentSortField,
}: {
  order: SortOrder;
  setOrder: (newSortOrder: SortOrder) => void;
  headingId: SortField;
  setCurrentSortField: (newSortField: SortField) => void;
}) => {
  setCurrentSortField(headingId);

  if (order === "asc") {
    setOrder("desc");
  } else if (order === "desc") {
    setOrder(undefined);
  } else if (order === undefined) {
    setOrder("asc");
  }
};
