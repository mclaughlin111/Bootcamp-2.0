export type TimeRow = {
  rank: number;
  chipTime: number;
  gunTime?: number;
  pbTime?: number;
  isPB: boolean;
  name: string;
  grading?: string;
  coach?: string;
  club?: string;
  venue: string;
  date: number;
};
