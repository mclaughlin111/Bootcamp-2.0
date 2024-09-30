import { SortField, SortOrder } from "../../../types/SortOptions";

export const handleSortChange = ({
  sortField,
  sortOption,
  order,
  setSortField,
  setSortOrder,
  setCurrentSortField,
  setOrder,
}: {
  sortField: SortField;
  sortOption: SortField;
  order: SortOrder;
  setSortField: (newSortField: SortField) => void;
  setSortOrder: (newSortOrder: SortOrder) => void;
  setCurrentSortField: (newSortField: SortField) => void;
  setOrder: (newOrder: SortOrder) => void;
}) => {
  console.log(sortOption);
  // Check if the clicked field is already the active sort field
  if (sortField === sortOption) {
    // Toggle the sort order between "asc" and "desc"
    setOrder(order === "asc" ? "desc" : "asc");
    setSortOrder(order === "asc" ? "desc" : "asc");
  } else {
    // If it's a new sort field, set it to "asc" by default
    setSortField(sortOption);
    setCurrentSortField(sortOption);
    setOrder(order === "asc" ? "desc" : "asc");
    setSortOrder(order === "asc" ? "desc" : "asc");
  }
};
