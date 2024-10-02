export type SortOrder = "asc" | "desc" | undefined;
export type SortField =
  | "rank"
  | "chipTime"
  | "name"
  | "club"
  | "coach"
  | "venue"
  | "date";

export type SortOptions = SortOrder | SortField | null;
