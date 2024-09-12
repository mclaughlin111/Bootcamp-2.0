import { ApiProperty } from '@nestjs/swagger';
import { TimeRow } from './types';
import { IndividualTime } from './IndividualTime';

export class TimesResponse {
  constructor(times: TimeRow[], totalTimesCount: number) {
    this.times = times;
    this.totalTimesCount = totalTimesCount;
  }

  @ApiProperty({
    description: 'A list of times',
    example: [
      {
        rank: 22,
        chipTime: 9698,
        pbTime: 9042,
        isPB: false,
        name: 'Tracy Barlow',
        grading: 'V35',
        coach: 'Tom Craggs',
        club: 'Thames Valley',
        venue: 'Copenhagen, DEN',
        date: 1714863600,
      },
      {
        rank: 26,
        chipTime: 9812,
        pbTime: 9812,
        isPB: true,
        name: 'Anna Lawson',
        club: 'Clapham Chasers',
        venue: 'Manchester',
        date: 1713049200,
      },
    ] as TimeRow[],
    type: IndividualTime,
    isArray: true,
  })
  times: TimeRow[];

  @ApiProperty({
    name: 'totalTimesCount',
    description: 'Total number of times available',
    example: 1500,
  })
  totalTimesCount: number;
}
