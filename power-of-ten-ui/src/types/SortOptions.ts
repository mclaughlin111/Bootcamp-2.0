export type SortOrder = "asc" | "desc";
export type SortField =
  | "rank"
  | "chipTime"
  | "name"
  | "club"
  | "coach"
  | "venue"
  | "date";

export type SortOptions = SortOrder | SortField;
